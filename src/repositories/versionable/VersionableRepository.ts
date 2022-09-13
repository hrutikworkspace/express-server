import { ObjectId } from "mongodb";
import * as mongoose from "mongoose";
import IProductModel from "../product/IProductModel";
export default class VersionableRepository<
  T extends mongoose.Document,
  U extends mongoose.Model<T>
> {
  public static generateObjectId() {
    return new mongoose.Types.ObjectId();
  }
  private model: U;
  constructor(model) {
    this.model = model;
  }
  public async create(data: T): Promise<T> {
    const id = VersionableRepository.generateObjectId();
    const model = new this.model({
      ...data,
      _id: id,
      OriginalId: id,
    });
    return await model.save();
  }
  public count(query: any) {
    const finalQuery = { deletedAt: null, ...query };
    return this.model.countDocuments(finalQuery);
  }
  public async getAll(options?: any): Promise<mongoose.Query<T[], T>> {
    // console.log('second...2', this.getAll);
    return await this.model.find({ deletedAt: null }, {}, options);
  }
  protected findOne(query: any): mongoose.Query<T, T> {
    const finalQuery = { deletedAt: null, ...query };
    return this.model.findOne(finalQuery);
  }
  protected find(
    query: any,
    projection: any = {},
    options: any = {}
  ): mongoose.Query<T[], T> {
    const finalQuery = { deletedAt: null, ...query };
    return this.model.find(finalQuery, projection, options);
  }
  protected async softDelete(id: string): Promise<mongoose.UpdateQuery<T>> {
    return await this.model.updateOne(
      { OriginalId: id, deletedAt: null },
      { deletedAt: Date.now() }
    );
  }

  public async getSpecific(
    options?: any,
    projection?: any
  ): Promise<mongoose.Query<IProductModel[], IProductModel>> {
    return this.model.find(options, { ...projection });
  }

  public async update(data?: any): Promise<T> {
    console.log("Searching for previous valid doucment");
    const previous = await this.findOne({
      OriginalId: data?.OriginalId,
      deletedAt: null,
    });
    console.log("/// pre: /// \n", previous);
    if (previous) {
      await this.softDelete(data.OriginalId);
      console.log('oid', previous);
      
    } else {
      return null;
    }
    console.log("//// Data //// \n", data);
    const newData = Object.assign(JSON.parse(JSON.stringify(previous)), data);
    console.log("/// New Data /// \n", newData);
    newData._id = VersionableRepository.generateObjectId();
    delete newData.daletedAt;
    const model = new this.model(newData);
    return model.save();
  }
}

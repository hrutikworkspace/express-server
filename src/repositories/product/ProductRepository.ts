import * as mongoose from "mongoose";
import VersionableRepository from "../versionable/VersionableRepository";
import IProductModel from "./IProductModel";
import { productModel } from "./ProductModel";

class ProductRepository extends VersionableRepository<
  IProductModel,
  mongoose.Model<IProductModel>
> {
  constructor() {
    super(productModel);
  }

  public static generateObjectId() {
    return new mongoose.Types.ObjectId();
  }

  public async getAll(): Promise<mongoose.Query<IProductModel[], IProductModel>> {
    return await super.getAll();
  }

  public create(data: any): Promise<IProductModel> {
    console.log("ProductRepository:: generate", data);
    const id = ProductRepository.generateObjectId();
    const model = new productModel({
      _id: id,
      ...data,
    });
    return super.create(data);
  }

  public update(OriginalId: any): Promise<IProductModel> {
    console.log("ProductRepository:: update", OriginalId);
    return super.update(OriginalId);
  }

  public delete(OriginalId: any): mongoose.UpdateQuery<IProductModel> {
    return super.softDelete(OriginalId);
  }


}
export const productRepository: ProductRepository = new ProductRepository();

import * as mongoose from "mongoose";
export default interface IVersionableDoucment extends mongoose.Document {
    deletedAt: Date;
    OriginalId: string;
    createdAt: Date;
}
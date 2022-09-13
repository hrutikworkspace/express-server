import * as mongoose from "mongoose";
import IVersionableDocument from "../versionable/IVersionableDocument";
export default interface IProductModel extends IVersionableDocument {
    productId : String,
    name : String,
    productType : String,
    category : String,
    basePrice : String,
    discount : String,
    charges : {
      gst : String,
      delivery : String
    },
    finalPrice : String
  }
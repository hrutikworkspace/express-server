import * as mongoose from "mongoose";
import VersionableSchema from "../versionable/VersionableSchema";
class ProductSchema extends VersionableSchema{

    constructor(collections: any) {
        const baseSchema = Object.assign ({
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
          });
        super(baseSchema,collections);
    }
}

export default ProductSchema;
import * as mongoose from "mongoose";
import ProductSchema from "./ProductSchema";
import IProductModel from "./IProductModel";

export const productSchema = new ProductSchema ({
    collection: "product",
});

export const productModel:mongoose.Model<IProductModel> = mongoose.model<IProductModel>
(
    "Product",
    productSchema
);
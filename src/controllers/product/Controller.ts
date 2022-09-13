import { NextFunction, Request, Response } from "express";
import { productRepository } from "../../repositories/product/ProductRepository";

class product {
  async get(req: Request, res: Response) {
    console.log("Inside getAll reuqest to get product");
    const data = await productRepository.getAll();
    res.status(200).send({
      message: `Successfully fetched all product from list`,
      status: 200,
      data: data,
    });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    console.log("product is created Successfully in a list");
    const {
      productId,
      name,
      productType,
      category,
      basePrice,
      discount,
      charges: {
        gst,
        delivery
      },
      finalPrice
    } = req.body
    const Response = await productRepository.create({
      productId,
      name,
      productType,
      category,
      basePrice,
      discount,
      charges: {
        gst,
        delivery
      },
      finalPrice
    });
    res.status(200).send({
      message: "product added Successfully in list",
      data: Response,
      status: "Success",
    });
  }

   async update(req: Request, res: Response, next: NextFunction) {
    console.log("Inside update request for product", req.body);
    const { OriginalId } = req.body;
    console.log("iddd", OriginalId);
    if (!OriginalId) {
      return next({
        error: "Bad Request",
        message: "OriginalId is required",
        status: 400,
      });
    }
   try {await productRepository.update(req.body)}
   catch(e)
   {console.log('eeeee',e)};
     res.status(200).send({
      message: "Product Created Successfully",
      data: { OriginalId },
      status: "success",
    });
    
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    console.log('iddd', id);
    console.log("Product deleted...?");
    if (!id) {
      return next({
        error: "Bad Request",
        message: "Id is required",
        status: 400,
      });
    }
    productRepository.delete(id);
    res.status(200).send({
      message: "Product Deleted successfully from list",
      data: { id },
      status: "success",
    });
  }
}
export default new product();

import { Router } from "express";
import product from "./Controller";
// import authMiddleWare from "../../libs/routes/authMiddleWare";
// import { USER } from "../../libs/constant";

const ProductRouter: Router = Router();

ProductRouter
  /**
   * @swagger
   * definitions:
   *   Product:
   *     required:
   *       - productId
   *       - name
   *       - ProductType
   *       - category
   *       - basePrice
   *       - discount
   *       - charges:
   *              - gst    
   *              - delivery
   *       - finalPrice
   *     properties:
   *       productId:
   *         type: string
   *       name:
   *         type: string
   *       ProductType:
   *         type: string
   *       category:
   *         type: string
   *       basePrice:
   *         type: string
   *       discount:
   *         type: string
   *       charges:
   *         type: object
   *         properties:
   *           gst:
   *             type: string
   *           delivery:
   *             type: string
   *       finalPrice:
   *          type: string
   */
  /**
   * @swagger
   * /api/product:
   *   get:
   *     description: Return the homepage
   *     responses:
   *       200:
   *         description: hello world
   */
  .get(
    "/",
    product.get
  )
  /**
   * @swagger
   * definitions:
   *   Product:
   *     required:
   *       - productId
   *       - name
   *       - ProductType
   *       - category
   *       - basePrice
   *       - discount
   *       - charges:
   *              - gst
   *              - delivery
   *       - finalPrice
   *     properties:
   *       productId:
   *         type: string
   *       name:
   *         type: string
   *       ProductType:
   *         type: string
   *       category:
   *         type: string
   *       basePrice: 
   *         type: string
   *       discount:
   *         type: string
   *       charges:
   *         type: object
   *         properties:
   *           gst:
   *             type: string
   *           delivery:
   *             type: string
   *       finalPrice:
   *         type: string
   *        
   */

  /**
   * @swagger
   * /api/product:
   *   post:
   *     description: Return the homepage
   *     parameters:
   *       - name: Product
   *         description: Product details.
   *         in : body
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Update
   *         schema:
   *           type: object
   *           $ref: '#/definitions/Product'
   */
  .post(
    "/",
    product.create
  )
  /**
   * @swagger
   * definitions:
   *   Product:
   *     required:
   *       - productId
   *       - name
   *       - ProductType
   *       - category
   *       - basePrice
   *       - discount
   *       - charges: 
   *       - gst
   *       - delivery
   *       - finalPrice
   *     properties:
   *       productId:
   *         type: string
   *       name:
   *         type: string
   *       ProductType:
   *         type: string
   *       category:
   *         type: string
   *       basePrice:
   *         type: string
   *       discount:
   *         type: string
   *       charges:
   *         type: object
   *         properties:
   *           gst:
   *             type: string
   *           delivery:
   *             type: string
   *       finalPrice:
   *         type: string
   */

  /**
   * @swagger
   * /api/product:
   *   put:
   *     description: Return the homepage
   *     parameters:
   *       - name: Product
   *         description: Product details.
   *         in : body
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Update
   *         schema:
   *           type: object
   *           $ref: '#/definitions/Product'
   */
  .put(
    "/",
    product.update
  )
  /**
   * @swagger
   * /api/product/{id}:
   *   delete:
   *     description: Return thr homepage
   *     parameters:
   *       - name: id
   *         description: Product details.
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: hello world
   */
  .delete(
    "/:id",
    product.delete
  )

export default ProductRouter;

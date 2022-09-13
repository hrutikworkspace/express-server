import * as express from 'express';
import ProductRouter from './controllers/product/routes';

const router: express.Router = express.Router();

router.use('/product',ProductRouter)

export default router;

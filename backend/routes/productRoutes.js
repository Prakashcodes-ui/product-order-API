import express from 'express';
import { getProduct, getSingleProduct } from '../controller/productController.js';

const router = express.Router();

router.get('/products',getProduct);
router.get('/products/:id',getSingleProduct);

export default router;
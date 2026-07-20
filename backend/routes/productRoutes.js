import express from 'express';
import { getAllProducts, getSingleProduct } from '../controller/productController.js';

const router = express.Router();

router.get('/products',getAllProducts);
router.get('/products/:id',getSingleProduct);

export default router;
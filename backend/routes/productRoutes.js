import express from 'express';
import { createProducts,getAllProducts, getSingleProduct } from '../controller/productController.js';

const router = express.Router();

router.post('/create', createProducts);
router.get('/products',getAllProducts);
router.get('/products/:id',getSingleProduct);

export default router;
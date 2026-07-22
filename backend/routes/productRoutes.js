import express from 'express';
import { getAllProducts, getSingleProducts } from '../controller/productController.js';

const router = express.Router();

router.get('/products',getAllProducts);
router.get('/products/:id',getSingleProducts);

export default router;
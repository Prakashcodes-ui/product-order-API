import express from 'express';
import { getAllProducts, getSingleProducts, updateProducts,deleteProducts} from '../controller/productController.js';

const router = express.Router();

router.get('/products',getAllProducts);
router.get('/products/:id',getSingleProducts);
router.put('/update/:id',updateProducts);
router.delete('/delete/:id',deleteProducts);

export default router;
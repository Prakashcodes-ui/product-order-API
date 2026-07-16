import express from 'express';
import { createOrder } from '../controller/prodectController.js';

const router = express.Router()

router.post('/order',createOrder)

export default router;
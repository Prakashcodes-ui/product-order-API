import express from 'express';
import dotenv from 'dotenv';
import productRouters from './routes/productRoutes.js';
import orderRouter from './routes/orderRoutes.js';


dotenv.config();
const app = express();
app.use(express.json());

//ROUTES
app.use('/api/pro', productRouters);
app.use('/api/ord', orderRouter)

const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`server start port number${PORT}`)
});
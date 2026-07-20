import express from 'express';
import dotenv from 'dotenv';
import productRouters from './routes/productRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import sequelize from './config/db.js';
import Products from './data/product.json' with { type: 'json' };
import ProductsDetails from './model/productModel.js';


dotenv.config();
const app = express();
app.use(express.json());

//ROUTES
app.use('/api', productRouters);
app.use('/api', orderRouter)

sequelize.authenticate()
    .then(() => console.log("DB connection"))
    .then(async() => { 
        await ProductsDetails.bulkCreate(Products); 
        console.log("products inserted");
    })
    .catch((error) => console.log("DB Error: ",error))

sequelize.sync()
    .then(() => console.log("Tables created"))
                                                 .catch((error) => console.log("table error:",error));


const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`server start port number${PORT}`)
});
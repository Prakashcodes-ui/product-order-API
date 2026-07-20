import express from 'express';
import dotenv from 'dotenv';
import productRouters from './routes/productRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import sequelize from './config/db.js';


dotenv.config();
const app = express();
app.use(express.json());

//ROUTES
app.use('/api', productRouters);
app.use('/api', orderRouter)

sequelize.authenticate()
    .then(() => console.log("DB connection"))
    .catch((error) => console.log("DB Error: ",error))
const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`server start port number${PORT}`)
});
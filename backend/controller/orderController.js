import OrderDetails from "../model/orderModel.js"
import ProductsDetails from "../model/productModel.js"

export const createOrder = async(req, res) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty),0)).toFixed(2);
    const status = "pending";
    const order = await OrderDetails.create({cartItems,amount,status});

    //updateing product stock
    cartItems.forEach(async (item) => {
        const product = await ProductsDetails.findByPk(item.product.id);
        product.stock = product.stock - item.qty;
        await product.save()
    });
    
    res.json({
        message:'product order',
        order
    })
}
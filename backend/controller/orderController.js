import OrderDetails from "../model/orderModel.js"

export const createOrder = async(req, res) => {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty),0)).toFixed(2);
    const status = "pending";
    const order = await OrderDetails.create({cartItems,amount,status});
    res.json({
        message:'product order',
        order
    })
}
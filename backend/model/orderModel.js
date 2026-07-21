import { ARRAY, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrderDetails = sequelize.define('OrderDetails',{

    cartItems:{
        type:DataTypes.JSON
    },
    amount:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    }
    
},{
    tableName:'orderdetails',
    timestamps:true 
});

export default OrderDetails;
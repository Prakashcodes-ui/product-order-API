import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const productsDetails = sequelize.define('productDetails',{

    name:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    ratings:{
        type:DataTypes.STRING
    },
    images:{
        type:DataTypes.JSON
    },
    category:{
        type:DataTypes.STRING
    },
    seller:{
        type:DataTypes.STRING
    },
    stock:{
        type:DataTypes.STRING
    },
    numOfReviews:{
        type:DataTypes.STRING
    }
},{
    tableName:'productdetails',
    timestamps:true 
});

export default productsDetails;
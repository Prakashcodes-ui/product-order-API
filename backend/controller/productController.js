import {getAllProduct} from '../services/productServices.js';


export const getAllProducts = async(req, res) => {
    try{
        const products = await getAllProduct();
        res.json(products)
    }catch(error){
        res.status(500).json({"error":error.message})
    }
    
};

export const getSingleProduct =  (req, res) => {
    res.json({
        success:true,
        message:'get single products worked'
    })
}
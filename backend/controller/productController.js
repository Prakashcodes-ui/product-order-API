import {getAllProduct, getSingleProduct} from '../services/productServices.js';

//get products - API
export const getAllProducts = async(req, res) => {
    try{
        const products = await getAllProduct();
        res.json(products)
    }catch(error){
        res.status(500).json({"error":error.message})
    }
    
};

//get single product - API
export const getSingleProducts =  async(req, res) => {
    try{
        const products = await getSingleProduct(req.params.id);
        if(!products) return res.status(404).json({"message":"product not found"});
        res.json(products)
    }catch(error){
        res.status(500).json({"error":error.message})
    }
    
};

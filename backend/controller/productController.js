import {getAllProduct, getSingleProduct, updateProduct, deleteProduct} from '../services/productServices.js';

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

//update product - API 

export const updateProducts = async(req, res) => {
    try{
        const products = await updateProduct(req.params.id, req.body);
        if(!products) return res.status(404).json({"message":"product not found"});
        res.json({"message":"Product Updated", products})
    }catch(error){
        res.status(500).json({"error":error.message}) 
    }
}

//delete product - API 
export const deleteProducts = async(req, res) => {
    try{
        const product = await deleteProduct(req.params.id);
        res.json({"message":"product deleted!", product})
    }catch(error){
        res.status(500).json({"error":error.message}) 
    }
}
import ProductsDetails from "../model/productModel.js";



export const getAllProduct = async() =>{
    return await ProductsDetails.findAll()
}
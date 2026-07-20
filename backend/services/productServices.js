import ProductsDetails from "../model/productModel.js";

export const createProduct = async (data) => {
    return await ProductsDetails.create(data);
};

export const getAllProduct = async() =>{
    return await ProductsDetails.findAll()
}
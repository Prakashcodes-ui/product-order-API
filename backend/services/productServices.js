import ProductsDetails from "../model/productModel.js";

//get all
export const getAllProduct = async() =>{
    return await ProductsDetails.findAll()
};

//get one
export const getSingleProduct = async(id) => {
    return await ProductsDetails.findByPk(id)
}

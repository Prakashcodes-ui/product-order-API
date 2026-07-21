import ProductsDetails from "../model/productModel.js";

//get all
export const getAllProduct = async() =>{
    return await ProductsDetails.findAll()
};

//get one
export const getSingleProduct = async(id) => {
    return await ProductsDetails.findByPk(id)
}

//update
export const updateProduct = async(id, data) => {
    const product = await ProductsDetails.findByPk(id);
    if(!product) return null;
    return await product.update(data);
}

//delete
export const deleteProduct = async(id) => {
    const product = await ProductsDetails.findByPk(id);
    if(!product) return null;
    return await product.destroy();
}

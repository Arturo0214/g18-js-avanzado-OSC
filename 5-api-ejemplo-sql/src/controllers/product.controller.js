import { methods as productServices } from "../services/product.service";

const getProducts = async(req, res) => {
    try {
        const query = await productServices.readProducts(res);
        return query;
    } catch (error) {
        res.status(400);
        res.send(error.message)
    }
    const query = await productServices.readProducts(res);
    return query;
};

const getProduct = async(req, res) => {};

const createProduct = async(req, res) => {};

const updateProducts = async(req, res) => {};

const deleteProduct = async(req, res) => {};

export const methods = {
    getProducts,
    getProduct,
    createProduct,
    updateProducts,
    deleteProduct
}
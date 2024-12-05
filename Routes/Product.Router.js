const {Router} = require('express');
const { GetProducts, GetProductById, CreateProduct, UpdateProduct, DeleteProduct } = require('../Controllers/Product.Controllers');

const ProductRoute = Router();

ProductRoute.get("/",GetProducts)

ProductRoute.get("/:productId",GetProductById)

ProductRoute.post("/",upload.sigle("img"),CreateProduct)

ProductRoute.patch("/:productId",UpdateProduct)

ProductRoute.delete("/:productId",DeleteProduct)

module.exports = ProductRoute;
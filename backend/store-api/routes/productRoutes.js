const express = require('express');
const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProductsStatic,
} = require('../controllers/productControllers');
const router = express.Router();

router.route('/').get(getProducts).post(createProduct);
router.route('/static').get(getAllProductsStatic);
router
  .route('/:productId')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = { productRouter: router };

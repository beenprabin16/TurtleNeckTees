const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct } = require('../controllers/productController');

// GET all products
router.get('/', getAllProducts);

// GET single product
router.get('/:id', getProductById);

// POST create product (admin only)
router.post('/', createProduct);

module.exports = router;

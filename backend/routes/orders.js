const express = require('express');
const router = express.Router();
const { getOrders, createOrder, updateOrder, getOrderById } = require('../controllers/orderController');

// GET all orders (user's orders)
router.get('/', getOrders);

// GET single order
router.get('/:id', getOrderById);

// POST create order
router.post('/', createOrder);

// PUT update order status
router.put('/:id', updateOrder);

module.exports = router;

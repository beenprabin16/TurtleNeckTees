const express = require('express');
const router = express.Router();
const { 
  getDashboard, 
  updateInventory, 
  getAllOrders, 
  updateOrderStatus 
} = require('../controllers/adminController');

// GET dashboard stats
router.get('/dashboard', getDashboard);

// GET all orders (admin view)
router.get('/orders', getAllOrders);

// PUT update order status
router.put('/orders/:id/status', updateOrderStatus);

// PUT update inventory
router.put('/inventory/:productId', updateInventory);

module.exports = router;

const express = require('express');
const router = express.Router();
const { 
  initiatePayment, 
  verifyPayment, 
  initiateKhaltiPayment,
  verifyKhaltiPayment 
} = require('../controllers/paymentController');

// POST initiate eSewa payment
router.post('/esewa/initiate', initiatePayment);

// POST verify eSewa payment
router.post('/esewa/verify', verifyPayment);

// POST initiate Khalti payment
router.post('/khalti/initiate', initiateKhaltiPayment);

// POST verify Khalti payment
router.post('/khalti/verify', verifyKhaltiPayment);

module.exports = router;

const express = require('express');
const router = express.Router();
const OrderController = require('../app/controllers/OrderController')

router.post('/create', OrderController.create)
router.get('/show', OrderController.show)
router.get('/showReceipt/:id', OrderController.showReceipt)
router.post('/delete', OrderController.delete)

module.exports = router;
const express = require('express');
const router = express.Router();
const ProductController = require('../app/controllers/ProductController')
const multer = require('../until/multer')

router.post('/create', multer.single('img'), ProductController.create)
// add laptop and phone
router.post('/create2', multer.single('img'), ProductController.create2)
// show all products
router.get('/show', ProductController.show)

module.exports = router;
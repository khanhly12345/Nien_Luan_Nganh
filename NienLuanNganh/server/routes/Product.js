const express = require('express');
const router = express.Router();
const ProductController = require('../app/controllers/ProductController')
const multer = require('../until/multer')

router.post('/create', multer.single('img'), ProductController.create)
// add laptop and phone
router.post('/create2', multer.single('img'), ProductController.create2)
// show all products
router.get('/show', ProductController.show)
// show edit product
router.get('/show/:id', ProductController.showEdit)
// edit product
router.post('/edit/:id', multer.single('imgNew'), ProductController.edit)
// delete product
router.post('/delete', ProductController.delete)
// api show laptop
router.get('/showCategory/:category', ProductController.showLaptop)
// api detail product
router.get('/detail/:id', ProductController.detail)

module.exports = router;
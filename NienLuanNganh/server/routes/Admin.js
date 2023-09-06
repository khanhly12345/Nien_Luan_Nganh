const express = require('express');
const router = express.Router();
const AdminController= require('../app/controllers/AdminController')

router.post('/create', AdminController.create)
router.get('/show', AdminController.show)
router.get('/showEdit/:id', AdminController.showEdit)
router.post('/edit/:id', AdminController.edit)
router.post('/delete', AdminController.delete)
router.post('/checklogin', AdminController.checklogin)
module.exports = router
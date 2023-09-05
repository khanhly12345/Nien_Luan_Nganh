const express = require('express');
const router = express.Router();
const AdminController= require('../app/controllers/AdminController')

router.post('/create', AdminController.create)

module.exports = router
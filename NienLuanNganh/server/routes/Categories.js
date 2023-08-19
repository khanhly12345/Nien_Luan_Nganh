const express = require('express');
const router = express.Router();
const CategoriesController = require('../app/controllers/CategoriesController')

router.get('/show', CategoriesController.show)

module.exports = router;

const express = require('express');
const router = express.Router();
const CommentsController= require('../app/controllers/CommentsController')

router.get('/show', CommentsController.show)

module.exports = router
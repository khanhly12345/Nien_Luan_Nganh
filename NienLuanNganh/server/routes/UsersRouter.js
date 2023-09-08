const express = require('express');
const router = express.Router();
const UsersRouter = require('../app/controllers/UsersController')

router.post('/create', UsersRouter.create)
router.post('/checklogin', UsersRouter.checkLogin)
router.get('/show', UsersRouter.show)

module.exports = router
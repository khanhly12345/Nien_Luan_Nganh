const Admin = require('../models/Admin')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AdminController {
    async create(req, res) {
        const {fullname, usename, password, role, phone} = req.body
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const admin = Admin({
            fullname,
            usename, 
            password: hashedPassword, 
            role, 
            phone
        })
        admin.save()
    }
}

module.exports = new AdminController();
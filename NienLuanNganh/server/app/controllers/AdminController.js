const Admin = require('../models/Admin')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class AdminController {
    async create(req, res) {
        const {fullname, username, password, role, phone} = req.body
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const admin = Admin({
            fullname,
            username, 
            password: hashedPassword, 
            role, 
            phone
        })
        if(admin.save()) {
            res.json({message: true})
        }
    }

    show (req, res) {
        Admin.find({})
            .then((admin) => {
                res.json(admin)
            })
            .catch(error => {
                console.log(error)
            })
    }

    showEdit (req, res) {
        Admin.findById(req.params.id)
            .then(admin => {
                res.json(admin)
            })
            .catch(error => {
                console.log(error)
            })
    }

    async edit (req, res) {
        const id = req.params.id
        const admin = await Admin.findById({ _id: id})
        const {fullname, username, password, newpassword, role, phone,} = req.body
        console.log(password)
        const passwordMatch = await bcrypt.compare(password, admin.password);

        if(passwordMatch) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newpassword, salt);
            Admin.updateOne({_id: id}, {
                fullname,
                username, 
                password: hashedPassword,
                role,
                phone
            })
            .then(() => {
                res.json({message: true})
            })
            .catch(error => {
                console.log('edit admin ', error)
            })
        }
    }

    delete(req, res) {
        const { id } = req.body
        Admin.deleteOne({_id: id})
            .then(() => {
                res.json({message: true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    async checklogin(req, res) {
        const {username, password} = req.body

        const admin = await Admin.findOne({username})
        const passwordMatch = await bcrypt.compare(password, admin.password);
        const secretKey = 'admin123'
        
        if(passwordMatch) {
            let token = jwt.sign({adminId: admin._id, username: admin.username, role: admin.role}, secretKey, {expiresIn: '1h'} )
            res.json({token})
        }else{
            res.json({message: 'Mật khẩu và tài khoản không chính xác!'})
        }
    }
}

module.exports = new AdminController();
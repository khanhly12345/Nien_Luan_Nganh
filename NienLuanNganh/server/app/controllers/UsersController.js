const User = require('../models/Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Users {
    async create(req, res) {
        const { username, password, comfirmPw, city, district, phone } = req.body;
        console.log(password, comfirmPw)
        if(password !== comfirmPw) {
            res.json({checkComfirm: false})
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = User({
                username,
                password: hashedPassword,
                phone, 
                city, 
                district 
            })
            const checkSave = user.save()
            if(checkSave) {
                res.json({checkComfirm: true})
            }else{
                console.log("loi")
            }
        }
    }

    async checkLogin(req, res) {
        const { username, password } = req.body;
        const user = await User.findOne({ username})
        const passwordMatch = await bcrypt.compare(password, user.password);
        const secretKey = 'khanhlydeptrai'

        if(passwordMatch) {
            let token = jwt.sign({userId: user._id, username: user.username}, secretKey, {expiresIn: '1h'} )
            res.json({token})
        }else{
            res.json({message: 'Mật khẩu và tài khoản không chính xác!'})
        }
    } 

    show(req, res) {
        User.find({})
            .then((user) => {
                res.json(user)
            })
    }
}

module.exports = new Users()
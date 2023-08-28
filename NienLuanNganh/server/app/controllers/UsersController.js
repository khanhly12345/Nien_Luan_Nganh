const User = require('../models/Users')
const bcrypt = require('bcrypt');

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

    checkLogin(req, res) {
        console.log(req.body)
    } 
}

module.exports = new Users()
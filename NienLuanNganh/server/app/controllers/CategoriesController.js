const categories = require('../models/Categories')

class Categories {
    show (req, res) {
        categories.find({})
            .then( category => {
                res.json(category)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

module.exports = new Categories();
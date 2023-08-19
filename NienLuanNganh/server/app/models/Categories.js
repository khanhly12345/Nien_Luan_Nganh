const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categories = new Schema({
    name: String,
    description: String,
},{
    collection: 'categories'
})



module.exports = mongoose.model('Categories', categories);
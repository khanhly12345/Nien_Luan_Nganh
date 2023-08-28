const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    username: String,
    password: String,
    phone: String,
    city: String,
    district: String
},{
    collection: 'users'
})

module.exports = mongoose.model('Users', Users);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
    fullname: String,
    username: String,
    password: String,
    phone: String,
    role: Number
},{
    collection: 'admin'
})

module.exports = mongoose.model('Admin', Admin);
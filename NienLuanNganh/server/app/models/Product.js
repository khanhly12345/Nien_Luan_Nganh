const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    branch: String,
    img: String,
    price: String,
    quantity: String,
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    attributes: {
        theheCPU: String,
        CPU: String,
        chip: String,
        ram: Array,
        hdh: String,
        manhinh: String,
        nsx: String,
        series: String,
        led: String,
        ketnoi: String,
        dophangiai: String,
        docambien: String,
        tencambien: String
    }
},{
    collection: 'product'
})



module.exports = mongoose.model('Product', Product);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const product = new Schema({
    name: String,
    branch: String,
    img: String,
    price: String,
    category:{
        type: String,
        ref: 'categories'
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



module.exports = mongoose.model('Product', product);
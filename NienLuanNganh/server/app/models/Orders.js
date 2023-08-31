const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Orders = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    item: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: { type: Number}
        }
    ],
    totalAmout: { type: Number},
    createdAt: { type: Date, default: Date.now}
},{
    collection: 'orders'
})

module.exports = mongoose.model('Orders', Orders);

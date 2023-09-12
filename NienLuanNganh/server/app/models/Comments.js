const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comments = new Schema({
    message: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
},{
    collection: 'comments',
    timestamps: true
})

module.exports = mongoose.model('Comments', Comments);
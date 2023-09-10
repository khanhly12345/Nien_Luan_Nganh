const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notificaiton = new Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    message: String,
    status: { type: String, default: 'unread' },
},{
    collection: 'notification',
    timestamps: true
})

module.exports = mongoose.model('Notificaiton', Notificaiton);
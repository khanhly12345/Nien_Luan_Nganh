const Order = require('../models/Orders')
const jwt = require('jsonwebtoken');

class OrderDetail {
    create (req, res) {
        const {getToken, carts, quantities, totalPrice} = req.body
        let decoded
        const newCart = carts.map((cart, index) => (
            {
                product: cart._id,
                quantity: quantities[index]
            }
        ))
        try {
            decoded = jwt.verify(getToken, "khanhlydeptrai");
          } catch (error) {
            console.error('Error decoding JWT:', error.message);
        }
        const order = new Order({
            user: decoded.userId,
            item: newCart,
            totalAmout: totalPrice
        })
        if(order.save()) {
            res.json({message: 'Đặt hàng thành công'})
        }
    }

    async show(req, res) {
        const order = await Order.find({})
            .populate('user')
            .exec()
        res.json(order)
    }

    async showReceipt(req, res) {
        const id = req.params.id
        const order = await Order.findOne({_id: id})
            .populate('item.product')
            .exec()
        res.json(order)
        // console.log(order)
    }

    delete(req, res) {
        const {id} = req.body
        Order.deleteOne({_id: id})
            .then(() => {
                res.json({message: true})
            })
            .catch(error=>{
                console.log(error)
            })
    }

    // total order
    async totalorder(req, res) {
        try {
            const orders = await Order.find({})
            res.json(orders)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new OrderDetail();
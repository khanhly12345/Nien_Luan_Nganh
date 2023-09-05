const categoriesRouter = require("./Categories")
const productRouter = require("./Product")
const UsersRouter = require("./UsersRouter")
const OrderRouter = require("./OrderRouter")
const AdminRouter = require("./Admin")
function route(app) {
    app.use('/api/categories', categoriesRouter)
    app.use('/api/products', productRouter)
    app.use('/api/user', UsersRouter)
    app.use('/api/order', OrderRouter)
    app.use('/api/admin', AdminRouter)
}

module.exports = route;
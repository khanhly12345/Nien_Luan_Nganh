const categoriesRouter = require("./Categories")
const productRouter = require("./Product")

function route(app) {
    app.use('/api/categories', categoriesRouter)
    app.use('/api/products', productRouter)
}

module.exports = route;
const categoriesRouter = require("./Categories")
function route(app) {
    app.use('/api/categories', categoriesRouter)
}

module.exports = route;
const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./config/db')
const route = require('./routes')
app.use(cors())
// connect db
db.connect()

app.get('/home', function (req, res) {
    res.json({ name: 'khanh ly', age: 23})
})
// router
route(app);
  
app.listen(3001)
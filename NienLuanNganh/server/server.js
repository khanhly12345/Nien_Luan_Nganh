const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.get('/home', function (req, res) {
    res.json({ name: 'khanh ly', age: 23})
})


  
app.listen(3001)
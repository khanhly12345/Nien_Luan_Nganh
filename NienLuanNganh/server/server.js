const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./config/db')
const route = require('./routes')
const bodyParser = require('body-parser');
const path = require('path');
const Notification = require('./until/notification')
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')

app.use(cors())

// connect db
db.connect()
app.use(bodyParser.json());

app.use(express.static('uploads'))


const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

Notification(io)

// router
route(app);

console.log(path.join(__dirname, 'uploads'))
  
server.listen(3001)
const Notificaitons = require('../app/models/Notifications')



function Notificaiton(io) {
    io.on('connection', (socket) => {
        socket.on('purchase', async (value) => {
            console.log(value)
            try {
                const notification = new Notificaitons({userId: value.userId, message: value.message})
                await notification.save()

                const notifications = await Notificaitons.find({ userId: value.userId});
                console.log(notifications)
                io.emit('notifications', notifications);
            } catch (error) {
                console.log('loi dat hang', error)
            }
        })

        socket.on('getNotifications', async (userId) => {
            try {
                const notifications = await Notificaitons.find({ userId: userId });
                socket.emit('notifications', notifications);
            } catch (error) {
                console.log('thong bao dat hang', error)
            }
        })

        socket.on('setStatus', async (value) => {
            console.log(value)
            await Notificaitons.updateOne({ _id: value.id}, {status: 'read'});

            const notifications = await Notificaitons.find({ userId: value.getIdToken});
            io.emit('status', notifications);
        })
    })
}

module.exports = Notificaiton;
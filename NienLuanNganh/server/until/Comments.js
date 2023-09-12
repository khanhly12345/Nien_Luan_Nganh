const Comments = require('../app/models/Comments')

function Comment (io) {
    io.on('connection', (socket) => {
        socket.on('setComments', async (value) => {
            const comments = new Comments({message: value.comment, userId: value.getTokenId, productId: value.id})
            await comments.save()

            const getComments = await Comments.find({productId: value.id}).populate('userId')
            io.emit('comments', getComments)
        })

        socket.on('getComments', async (value) => {
            const getComments = await Comments.find({productId: value.id}).populate('userId')
            console.log(getComments)
            io.emit('getcomment', getComments)
        })

        socket.on('deleteComments', async (value) => {
            await Comments.deleteOne({ _id: value.id})

            const getComments = await Comments.find({productId: value.productId}).populate('userId')
            io.emit('delete', getComments)
        })
    })
}

module.exports = Comment;
export class SocketIo {

    async SocketinitListen(io) {
        io.on('connection', (socket) => {
            socket.on('message', async (contenido) => {
                socket.broadcast.emit('message', contenido)
            })
            socket.on('disconnect', async () => {
                console.log('user disconnected', socket.id);
            });
        })
    }
}

const io = require( "socket.io" )();
const socketApi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    socket.emit("connected", "You are connected to the server");
    socket.on('update_nilai_atletik', (data)=>{
        socket.broadcast.emit('broadcast_update_nilai_atletik', data);
    })
});

// end of socket.io logic

module.exports = socketApi;
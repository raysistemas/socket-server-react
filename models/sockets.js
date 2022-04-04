class Sockets {
  constructor( io ) {
      this.io = io;
      this.socketEvents();
  }

  socketEvents() {
    //On connection
    this.io.on("connection", (socket) => {
      //   //Escuchar Eventto mensaje-cliente
      socket.on("mensaje-cliente", (data) => {
        console.log(data);

        this.io.emit("mensaje-server", data);
      });
    });
  }
}

module.exports = Sockets;

//Servidor de Express
const express = require("express");
//Servidor de sockets
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require('cors');
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // http Server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {/* Configuracione */});

    // this.io = socketio(this.server, {cors: {
    //   origin: "*",
    //   methods: ["GET", "POST"]
    // }});

  }

  middlewares() {
    //Desplegar el directorio publico
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    this.app.use ( cors() );
  }

  configurarSockets() {
    new Sockets( this.io );
  }

  execute() {
    //Inicializar Middlewares
    this.middlewares();

    //InicializarSockets
    this.configurarSockets();

    //Inicializar Server
    this.server.listen(this.port, () => {
      console.log("Server Corriendo En Puerto: ", this.port);
    });
  }
}

module.exports = Server;

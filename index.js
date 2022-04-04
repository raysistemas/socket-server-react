const Server = require("./models/server");

require('dotenv').config();

const server = new Server();

server.execute();

// //Socket de lado del servidor
// io.on('connection', ( socket ) => { 
//   // console.log(socket.id);
//   // socket.emit('mensaje-bienvenida', 'Bienvenido al Server');
//   // socket.emit('mensaje-bienvenida', {
//   //   msg: 'Bienvenido al Server',
//   //   fecha: new Date()
//   // });

//   //Escuchar Eventto
//   socket.on('mensaje-cliente', ( data )=>{
//     console.log(data);
//     io.emit('mensaje-server', data);
//   });

// });

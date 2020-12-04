const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
const message = require("./routes/Message");
const user = require("./routes/User");
const morgan = require('morgan');
const sequelize = require('./config/db');
const cors = require('cors');
const http = require('http')
const socketIo = require("socket.io");
const server = http.createServer(app);
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors())

//Routes declaration
app.use("/message", message);
app.use("/user", user);

//Conectando socket
const io = socketIo(server,{cors: {
  origin: '*'
}})

io.on('connection', socket => {
  socket.on('conectado', () => {
    console.log("Nuevo usuario conectado")
  });

  socket.on('mensaje', (mensaje) =>{
    io.emit('mensajes', {mensaje})
  })
});



//levantando servidor
server.listen(PORT, ()=>{
    console.log(`API funcionando en ${PORT}`)
})

//autenticacion
try{
    sequelize.authenticate()
    console.log("Conectado a la Base de Datos")
} catch (e){
    console.log("Hubo un error al conectar a la base de datos")
}

//@ts-check
"use strict";
// Create Instances
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const sequelize = require('./bin/database');
//
const http = require('http');
const { Server } = require("socket.io");

// Carregar Banco
sequelize.sync().then(() => console.debug('db is ready!'))

// Load env vars
dotenv.config(  { path: './bin/.env' });
const PORT = process.env.SERVER_PORT || 5000;
const ENV = process.env.SERVER_ENV;

// Load Routes
const usuario = require('./routes/0001-usuario')
const monetizacao = require('./routes/0002-monetizacao')
const usuarioMonetizacao = require('./routes/0003-usuarioMonetizacao')
const historico = require('./routes/0004-historico')
const login = require('./routes/0005-login')

// Initialize app variable with express
const app = express();

// Body parser
app.use(express.json());

// Mount Middlewares
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
};

// Mount Routes
app.use('/api/v1/usuario', usuario);
app.use('/api/v1/monetizacao', monetizacao);
app.use('/api/v1/usuarioMonetizacao', usuarioMonetizacao);
app.use('/api/v1/historico', historico);
app.use('/api/v1/login', login);

// Run Server
const server = app.listen( PORT, () =>{
    console.debug(`Server running in ${ENV} mode on port ${PORT}`)
});

// Handle unhandled rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});

// Instantiating socket.io
const io = new Server(server, {path: '/api/v1/gaming',
    cors: {
        origin: "https://quatroemlinhabackendweb.azurewebsites.net",
    }
});

// Event handlers for Socket
io.on('connect', (socket) => {
    console.log('Is socket connected:', socket.connected);
    console.log(`Novo socket conectado: ${socket.id}`);
});

io.on("connection", (socket) => {
    socket.emit("hello", "world");
    socket.on("msg", (arg) => {
        console.log(arg); // world
        socket.broadcast.emit('msg', arg);
        if( arg.gameStatus === 'winner' || arg.gameStatus === 'loser' ){
            console.log('Socket desconectado:', socket.id)    
            socket.disconnect();
        }
      });
});
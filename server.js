//@ts-check
"use strict";
// Create Instances
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const sequelize = require('./bin/database');

// Carregar Banco
sequelize.sync().then(() => console.debug('db is ready!'))

// Load env vars
dotenv.config(  { path: './bin/.env' });
const PORT = process.env.SERVER_PORT || 5000;
const ENV = process.env.SERVER_ENV;

// Load Routes
const test = require('./routes/test')

// Initialize app variable with express
const app = express();

// Body parser
app.use(express.json());

// Mount Middlewares
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
};

// Mount Routes
app.use('/api/v1/test', test);

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
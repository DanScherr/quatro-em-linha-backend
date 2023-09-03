// Create Instances
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load env vars
dotenv.config(  { path: './config/.env' });
const PORT = process.env.SERVER_PORT || 5000;
const ENV = process.env.SERVER_ENV;

//Load Routes

// Initialize app variable with express
const app = express();

// Body parser
app.use(express.json());

// Mount Routes

// Mount Middlewares
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
};

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
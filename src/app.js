const { createServer } = require('http');
const { ENV } = require('./CONFIG/ENV-CONF');
const conn = require('../db/conn');

const express = require("express");
const bodyParser = require('body-parser');
const initRestRoutes = require('./api/routes');

const app = express()

// Use body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Initialize the REST API routes
initRestRoutes(app);

// Create an HTTP server with the Express app as the request handler
const server = createServer(app);

// Start the server and listen on the port defined in ENV
server.listen(ENV.SERVER.SERVER_PORT, () => {
    console.log(`node server is listening on port ${ENV.SERVER.SERVER_PORT} in ${ENV.SERVER.SERVER_ENV} mode`);
});
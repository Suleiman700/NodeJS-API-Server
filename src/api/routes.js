const { Router } = require('express');
const registerApiRoutes = require('./services/router');

/**
 * Initialize the Express REST API routes
 *
 * @param {App} _app Express app instance
 * @returns {void}
 */
module.exports = function initRestRoutes(_app) {
        // Define the API version prefix
        const prefix = '/api/v1';

        // Define a basic ping endpoint for testing
        _app.get(prefix, (req, res) => {
                res.send('PING');
        });

        // Register additional API routes
        registerApiRoutes(_app, prefix);
};

const { Router } = require('express');
const AuthRoutes = require('./auth/auth-routes.js');
const TokenRoutes = require('./api-token/token-routes.js');
const registerUsersRoutes = require('./users/registerUsersRoutes.js');

/**
 * Register component-level routes with the Express app
 *
 * @param {App} _app Express router instance
 * @param {string} _prefix Prefix for the API routes
 * @returns {void}
 */
module.exports = function registerApiRoutes(_app, _prefix) {
    // Use the AuthRoutes component
    _app.use(`${_prefix}/auth`, new AuthRoutes().router);

    // Use the TokenRoutes component
    _app.use(`${_prefix}/api-token`, new TokenRoutes().router);

    // register users routes
    registerUsersRoutes(_app, `${_prefix}/users`)
};

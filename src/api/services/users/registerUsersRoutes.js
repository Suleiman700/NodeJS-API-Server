const UsersGetRoutes = require('./get/users-get-routes.js');
const UsersUpdateRoutes = require('./update/users-update-routes.js');

/**
 * Register the routes for the Users component
 *
 * @param {App} _app Express router instance
 * @param {string} prefix Prefix for the component routes
 * @returns {void}
 */
module.exports = function registerUsersRoutes(_app, prefix) {
    // register get routes
    _app.use(`${prefix}/get`, new UsersGetRoutes().router);

    _app.use(`${prefix}/update`, new UsersUpdateRoutes().router);
};

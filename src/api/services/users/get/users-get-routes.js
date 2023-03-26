const { Router } = require('express');
const { body, check, param} = require('express-validator');

const UsersGetController = require('./users-get-controller.js');
const ApiTokenService = require('../../../../services/api-token');

/**
 * Define the routes for the Users component.
 */
module.exports = class UsersGetRoutes {
    /**
     * Create a new instance of Express Router for this component's routes.
     */
    router = Router();

    /**
     * Create a new instance of the AuthService and ApiTokenService,
     * and then call the `initRoutes` method.
     */
    constructor() {
        this.usersGetController = new UsersGetController();
        this.apiTokenService = new ApiTokenService();
        this.initRoutes();
    }

    /**
     * Initialize the routes for this component.
     */
    initRoutes() {
        this.router.get('/userId/:userId',
            // Validate the API token before handling the request.
            this.apiTokenService.validateApiToken,
            // validate userId
            param('userId', 'userId must be a number').isNumeric(),
            // get user data
            this.usersGetController.getUserDataByUserId,
            // Handle the successful request.
            (req, res) => {}
        );
    }
}

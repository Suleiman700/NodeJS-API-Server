const { Router } = require('express');
const { body } = require('express-validator');

const AuthService  = require('../../../services/auth');
const AuthController = require('./controller.js');
const ApiTokenService = require('../../../services/api-token');
const ValidationService = require('../../../services/validation.js');

/**
 * Define the routes for the Auth component.
 */
module.exports = class AuthRoutes {
    /**
     * Create a new instance of Express Router for this component's routes.
     */
    router = Router();

    /**
     * Create a new instance of the AuthService and ApiTokenService,
     * and then call the `initRoutes` method.
     */
    constructor() {
        this.authService = new AuthService('jwt');
        this.authController = new AuthController();
        this.apiTokenService = new ApiTokenService();
        this.validationService = new ValidationService()
        this.initRoutes();
    }

    /**
     * Initialize the routes for this component.
     */
    initRoutes() {
        this.router.post('/signin',
            // validate the request body
            body('email', 'Invalid email address').isEmail(),
            body('password', 'Password should be a number only').isNumeric(),
            this.validationService.validateRequest,
            // this.authController.signinUser,
            // Handle the successful signin.
            (req, res) => {
                console.log('Successful signin');
                res.send('Success');
            }
        );

        this.router.get('/:userId',
            // Validate the API token before handling the request.
            this.apiTokenService.validateApiToken,
            // Handle the successful request.
            (req, res) => {
                console.log(`User ID: ${req.params.userId}`);
                res.send(`The user ID you sent is: ${req.params.userId}`);
            }
        );
    }
}

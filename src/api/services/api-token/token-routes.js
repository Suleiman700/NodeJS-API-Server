const { Router } = require('express');
const { body, param, query } = require('express-validator');

const TokenController  = require('./controller');

// const AuthService  = require('../../../services/auth');
// const { IComponentRoutes } = require('../helper');

module.exports = class AuthRoutes {
    router = Router();

    constructor() {
        // this.authSerivce = new AuthService('jwt');
        this.tokenContoller = new TokenController()
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/generate-token',
            async (req, res) => {
            console.log('here')
                // Generate token
                const generated_token = this.tokenContoller.generateToken()

                // Save token into database
                console.log(generated_token)

                res.send(generated_token.token)
            }
        );
        // this.router.post('/signin', (req, res) => res.send('testv1'));

        // this.router.get(
        //     '/signin',
        //     body('email').isEmail(),
        //     body('password').isString(),
        //     // this.authSerivce.validateRequest,
        //     // this.controller.signinUser
        // );
    }
}
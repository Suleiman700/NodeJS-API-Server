const { NextFunction, Request, Response } = require('express')

const { AuthService } = require('../../../services/auth');
const { UtilityService } = require('../../../services/utility');
const { check, validationResult, body} = require('express-validator');



module.exports = class AuthController {
    // authService = new AuthService();

    // userRepo = new UserRepository();

    async signinUser(req, res, next) {
        // Define the validation rules for the request data
        body('email1', 'Invalid email address').isDate()

        // Check if there are any validation errors
        const errors = await validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        // Continue with the rest of the signin process if there are no errors
        return next();
    }


    /**
     * @param req Express request
     * @param res Express response
     * @param next Express next
     * @returns HTTP response
     */
    async signinUserOLD(req, res, next) {
        return next()
        // try {
        //     const { email, password } = req.body;
        //
        //     const user = await this.userRepo.read({
        //         select: ['id', 'email', 'firstname', 'lastname', 'password', 'active'],
        //         where: {
        //             email,
        //             active: true
        //         }
        //     });
        //
        //     if (!user || !(await UtilityService.verifyPassword(password, user.password))) {
        //         return res.status(401).json({ status: 401, error: 'Wrong email or password' });
        //     }
        //
        //     // Create jwt -> required for further requests
        //     const token = this.authService.createToken(user.id);
        //
        //     // Don't send user password in response
        //     delete user.password;
        //
        //     return res.json({ token, user });
        // } catch (err) {
        //     return next(err);
        // }
    }
}
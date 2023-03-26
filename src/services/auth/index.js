const { Handler, NextFunction, Request, Response } = require('express');
const { sign, SignOptions } = require('jsonwebtoken');
const { use } = require('passport');
const { ExtractJwt, StrategyOptions } = require('passport-jwt');
const { validationResult } = require('express-validator');

const { ENV } = require('../../CONFIG/ENV-CONF');
const JwtStrategy = require("passport-jwt/lib/strategy");

/**
 * AuthService
 *
 * Available passport strategies for authentication:
 *  - JWT (default)
 *
 * Pass a strategy when initializing module routes to setup this strategy for the complete module: Example: new UserRoutes('jwt')
 *
 * To setup a strategy for individual endpoints in a module pass the strategy on isAuthorized call
 * Example: isAuthorized('basic')
 */

module.exports = class AuthService {
    defaultStrategy;
    jwtStrategy;

    strategyOptions = {
        audience: 'expressjs-api-client',
        issuer: 'expressjs-api',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'my-super-secret-key'
    };

    // JWT options
    signOptions = {
        audience: this.strategyOptions.audience,
        expiresIn: '8h',
        issuer: this.strategyOptions.issuer
    };

    constructor(defaultStrategy='jwt') {
        // Setup default strategy -> use jwt if none is provided
        this.defaultStrategy = defaultStrategy;
        this.jwtStrategy = new JwtStrategy(this.strategyOptions, this.defaultStrategy);
    }

    /**
     * Create JWT
     *
     * @param userID Used for JWT payload
     * @returns Returns JWT
     */
    createToken(userID) {
        return sign({ userID }, this.strategyOptions.secretOrKey, this.signOptions);
    }

    /**
     * Middleware for verifying user permissions from acl
     *
     * @param resource Requested resource
     * @param action Performed action on requested resource
     * @returns Returns if action on resource is allowed
     */
    hasPermission(resource, action) {
        return async (req, res, next) => {
            try {
                const { id } = req.user;
                const access = true //: boolean = await policy.isAllowed(id, resource, action);

                if (!access) {
                    return res.status(403).json({
                        error: 'Missing user rights!'
                    });
                }

                return next();
            } catch (err) {
                return next(err);
            }
        };
    }

    /**
     * Init passport strategies
     *
     * @returns
     */
    initStrategies() {
        use('jwt', this.jwtStrategy.strategy);
    }

    /**
     * Setup target passport authorization
     *
     * @param strategy Passport strategy
     * @returns Returns if user is authorized
     */
    isAuthorized(strategy) {
        return true
    }

    // moved to: src/services/validation.js
    // validateRequest(req, res, next) {
    //     console.log(req.body);
    //     console.log(req.params);
    //     console.log(req.query);
    //     const errors = validationResult(req);
    //
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ error: errors.array() });
    //     }
    //
    //     return next();
    // }

    /**
     * Executes the target passport authorization
     *
     * @param req Express request
     * @param res Express response
     * @param next Express next
     * @param strategy Passport strategy name
     * @returns Returns if user is authorized
     */
    doAuthentication(
        req,
        res,
        next,
        strategy
    ) {
        try {
            switch (strategy) {
                case 'jwt':
                    return this.jwtStrategy.isAuthorized(req, res, next);
                default:
                    throw new Error(`Unknown passport strategy: ${strategy}`);
            }
        } catch (err) {
            return next(err);
        }
    }
}
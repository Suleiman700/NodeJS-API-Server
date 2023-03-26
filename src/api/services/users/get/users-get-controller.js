const { NextFunction, Request, Response } = require('express')
const {body, validationResult, check, query} = require('express-validator');
const {logout} = require('passport/lib/http/request.js');
const ERROR_CODES_CONFIG = require("../../../../CONFIG/ERROR-CODES-CONFIG");


module.exports = class UsersGetController {

    async getUserDataByUserId(req, res, next) {
        const userId = req.params.userId

        // gran data from database here and store it in responseData

        const responseData = {
            identifier: userId,
            status: true,
            errors: [],
            data: {
                id: 1,
                name: 'John Doe'
            }
        }

        // Return the user data
        if (responseData['dataFound']) {
            return res.status(200).json(responseData);
        }
        else {
            // store error
            const error = {
                errorCode: ERROR_CODES_CONFIG.USERS.GET.USER_ID.DATA_NOT_FOUND.ERROR_CODE,
                message: ERROR_CODES_CONFIG.USERS.GET.USER_ID.DATA_NOT_FOUND.MESSAGE
            }
            responseData['errors'].push(error)
            return res.status(404).json(responseData);
        }

    }
}
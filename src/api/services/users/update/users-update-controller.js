const { NextFunction, Request, Response } = require('express')
const {body, validationResult, check, query} = require('express-validator');
const {logout} = require('passport/lib/http/request.js');
const ERROR_CODES_CONFIG = require("../../../../CONFIG/ERROR-CODES-CONFIG");


module.exports = class UsersUpdateController {

    async updateUserData(req, res, next) {
        const responseData = {
            identifier: req.params.userId,
            status: true,
            errors: [],
            data: {}
        }

        // flag
        let validData = true

        // check name
        const name = req.body.name
        if (!name || !name.length) {
            validData = false

            // store error
            const error = {
                errorCode: ERROR_CODES_CONFIG.USERS.UPDATE.VALIDATION.USER_ID.MISSING_NAME.ERROR_CODE,
                message: ERROR_CODES_CONFIG.USERS.UPDATE.VALIDATION.USER_ID.MISSING_NAME.MESSAGE
            }
            responseData['errors'].push(error)
        }

        // check email
        const email = req.body.email
        if (!email || !email.length) {
            validData = false

            // store error
            const error = {
                errorCode: ERROR_CODES_CONFIG.USERS.UPDATE.VALIDATION.USER_ID.MISSING_EMAIL.ERROR_CODE,
                message: ERROR_CODES_CONFIG.USERS.UPDATE.VALIDATION.USER_ID.MISSING_EMAIL.MESSAGE
            }
            responseData['errors'].push(error)
        }

        if (validData) {

        }
        else {
            responseData['status'] = false
            return res.status(400).json(responseData);
        }

        console.log(responseData)


        // const userId = req.params.userId
        //
        // // gran data from database here and store it in responseData
        //
        // const responseData = {
        //     identifier: userId,
        //     status: true,
        //     errors: [],
        //     data: {
        //         id: 1,
        //         name: 'John Doe'
        //     }
        // }
        //
        // // Return the user data
        // if (responseData['dataFound']) {
        //     return res.status(200).json(responseData);
        // }
        // else {
        //     // store error
        //     const error = {
        //         errorCode: ERROR_CODES_CONFIG.USERS.GET.USER_ID.DATA_NOT_FOUND.ERROR_CODE,
        //         message: ERROR_CODES_CONFIG.USERS.GET.USER_ID.DATA_NOT_FOUND.MESSAGE
        //     }
        //     responseData['errors'].push(error)
        //     return res.status(404).json(responseData);
        // }

    }
}
const API_TOKEN_CONF = require("../../CONFIG/API-TOKEN-CONF");
const ERROR_CODES_CONFIG = require("../../CONFIG/ERROR-CODES-CONFIG");

module.exports = class ApiTokenService {
    constructor() {}

    /**
     * Validate api token
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    validateApiToken(req, res, next) {
        const api_token = req.headers[API_TOKEN_CONF.TOKEN_HEADER_REQUEST_KEY_NAME]

        if (api_token === undefined && false) {
            return res.status(400).json({
                errorCode: ERROR_CODES_CONFIG.API_TOKEN.NOT_FOUND.ERROR_CODE,
                message: ERROR_CODES_CONFIG.API_TOKEN.NOT_FOUND.MESSAGE
            });
        }

        // Todo - Check if the token exist in database...
        // return res.status(400).json({
        //     errorCode: ERROR_CODES_CONFIG.API_TOKEN.EXPIRED.ERROR_CODE,
        //     message: ERROR_CODES_CONFIG.API_TOKEN.EXPIRED.MESSAGE
        // });


        return next();
    }
}
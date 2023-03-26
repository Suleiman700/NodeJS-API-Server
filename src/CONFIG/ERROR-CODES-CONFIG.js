/**
 * Error codes configurations
 */

const ERROR_CODES_CONFIG = {
    API_TOKEN: {
        NOT_FOUND: {
            ERROR_CODE: 'API_TOKEN.NOT_FOUND',
            MESSAGE: 'Api token could not be found',
            DESCRIPTION: 'Api token was not found in the request header',
            POSSIBLE_FIX: 'Make sure that the api token has been sent in the request header with the correct key name', // Key name can be found in API-TOKEN-CONF.TOKEN_HEADER_REQUEST_KEY_NAME
        },
        EXPIRED: {
            ERROR_CODE: 'API_TOKEN.EXPIRED',
            MESSAGE: 'Api token has been expired',
            DESCRIPTION: 'Api token has been expired',
            POSSIBLE_FIX: 'You will have to generate a new token'
        }
    },
    USERS: {
        GET: {
            USER_ID: {
                DATA_NOT_FOUND: {
                    ERROR_CODE: 'USER_ID_DATA_NOT_FOUND',
                    MESSAGE: 'Could not find data for this user',
                    DESCRIPTION: 'Server was unable to find data for the user',
                    POSSIBLE_FIX: 'Make sure that the userId you want to get his data does exist in database',

                }
            }
        },
        UPDATE: {
            VALIDATION: {
                USER_ID: {
                    MISSING_NAME: {
                        ERROR_CODE: 'MISSING_NAME',
                        MESSAGE: 'Could not find name parameter',
                        DESCRIPTION: 'Server was unable to find name parameter in request body.',
                        POSSIBLE_FIX: 'Make sure that you are sending name parameter in request body.',
                    },
                    MISSING_EMAIL: {
                        ERROR_CODE: 'MISSING_EMAIL',
                        MESSAGE: 'Could not find email parameter',
                        DESCRIPTION: 'Server was unable to find email parameter in request body.',
                        POSSIBLE_FIX: 'Make sure that you are sending email parameter in request body.',
                    },
                },
            }
        }
    }
}

module.exports = ERROR_CODES_CONFIG
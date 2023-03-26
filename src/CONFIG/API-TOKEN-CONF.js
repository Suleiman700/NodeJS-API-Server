/**
 * Api token configurations
 */

// Generated api token expiry settings
const API_TOKEN_CONF = {
    EXPIRE_IN_DAYS: 1, // Token will expire in X days
    EXPIRE_IN_HOURS: 0, // Token will expire in X hours
    EXPIRE_IN_MINUTES: 0, // Token will expire in X minutes
    TOKEN_HEADER_REQUEST_KEY_NAME: 'api-token' // The name of the API token key in the request header
}

module.exports = API_TOKEN_CONF
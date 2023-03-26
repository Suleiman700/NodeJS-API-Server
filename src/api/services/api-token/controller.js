const crypto = require('crypto');
const API_TOKEN_CONF = require('../../../CONFIG/API-TOKEN-CONF') // Api token configuration


module.exports = class TokenController {
    // authService = new AuthService();

    // userRepo = new UserRepository();

    /**
     * Generate API token
     * @returns {{expiryDate: Date, token: string}}
     */
    generateToken() {
        // Generate expiry date
        const date = new Date();
        date.setDate(date.getDate() + API_TOKEN_CONF.EXPIRE_IN_DAYS)
        date.setHours(date.getHours() + API_TOKEN_CONF.EXPIRE_IN_HOURS);
        date.setMinutes(date.getMinutes() + API_TOKEN_CONF.EXPIRE_IN_MINUTES);

        const data = {
            expiryDate: date,
            token: crypto.randomBytes(64).toString('hex')
        }
        return data
    }
}
const {validationResult} = require('express-validator');

module.exports = class ValidationService {

    /**
     * validate parameters in request body
     * @param req
     * @param res
     * @param next
     * @return {*}
     */
    validateRequest(req, res, next) {
        // console.log(req.body);
        // console.log(req.params);
        // console.log(req.query);
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        return next();
    }

}
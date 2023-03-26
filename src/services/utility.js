const { compare, genSalt, hash } = require('bcryptjs');
const { v1 } = require('uuid');

const crypto = require('crypto');
const {validationResult} = require('express-validator');

// import { logger } from '../config/logger';

/**
 * UtilityService
 *
 * Service for utility functions
 */
module.exports = class UtilityService {
    /**
     * Error handler
     *
     * @param err
     * @returns
     */
    handleError(err) {
        console.log(err)
        // logger.error(err.stack || err);
    }

    /**
     * Hash plain password
     *
     * @param plainPassword Password to hash
     * @returns hashed password
     */
    hashPassword(plainPassword) {
        return new Promise((resolve, reject) => {
            genSalt((err, salt) => {
                if (err) {
                    reject(err);
                }

                hash(plainPassword, salt, (error, hashedVal) => {
                    if (error) {
                        reject(error);
                    }

                    resolve(hashedVal);
                });
            });
        });
    }

    /**
     * Compares plain password with hashed password
     *
     * @param plainPassword Plain password to compare
     * @param hashedPassword Hashed password to compare
     * @returns whether passwords match
     */
    verifyPassword(plainPassword, hashedPassword) {
        return new Promise((resolve, reject) => {
            compare(plainPassword, hashedPassword, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    /**
     * Hash string with sha256 algorithm
     *
     * @param text String to hash
     * @returns Returns hashed string
     */
    hashString(text) {
        return crypto.createHash('sha256').update(text).digest('hex');
    }

    /**
     * Generate UUID
     *
     * @returns UUID
     */
    generateUuid() {
        return v1();
    }
}
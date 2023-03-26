const dotenv = require('dotenv');
dotenv.config();

// Environment variables imported from .env file
module.exports = {
    ENV: {
        SERVER: {
            SERVER_ENV: process.env.SERVER_ENV,
            SERVER_PORT: parseInt(process.env.SERVER_PORT),
            DOMAIN: process.env.SERVER_DOMAIN,
        },
        DB: {
            NAME: process.env.SERVER_ENV==='production' ? process.env.PROD_DB_NAME:process.env.DEV_DB_NAME,
            HOST: process.env.SERVER_ENV==='production' ? process.env.PROD_DB_HOST:process.env.DEV_DB_HOST,
            PORT: parseInt(process.env.SERVER_ENV==='production' ? process.env.PROD_DB_PORT:process.env.DEV_DB_PORT),
            USER: process.env.SERVER_ENV==='production' ? process.env.PROD_DB_USERNAME:process.env.DEV_DB_USERNAME,
            PASS: process.env.SERVER_ENV==='production' ? process.env.PROD_DB_PASSWORD:process.env.DEV_DB_PASSWORD,
        },
        SMTP: {
            HOST: process.env.SERVER_ENV==='production' ? process.env.PROD_SMTP_HOST:process.env.DEV_SMTP_HOST,
            PORT: parseInt(process.env.SERVER_ENV==='production' ? process.env.PROD_SMTP_PORT:process.env.DEV_SMTP_PORT),
            USER: process.env.SERVER_ENV==='production' ? process.env.PROD_SMTP_USERNAME:process.env.DEV_SMTP_USERNAME,
            PASS: process.env.SERVER_ENV==='production' ? process.env.PROD_SMTP_PASSWORD:process.env.DEV_SMTP_PASSWORD,
            tlsRejectUnauthorized: false
        },
        MONGODB: {
            URL: process.env.MONGODB_URL
        }
    }
}


// export const mails = {
//     support: 'support@my-company.com'
// };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiToken = new Schema({
    ip: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    expiry: {
        type: Date,
        required: true
    }
});

const schemaApiToken = mongoose.model("apiToken", apiToken);

module.exports = schemaApiToken;
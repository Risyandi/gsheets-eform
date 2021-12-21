/**
 * helper or utils functions for google apis
 */
const {google} = require('googleapis');
const config = require('../config');
const {GOOGLE_PATH_KEYACCOUNT} = config;

// google api authentication
const getAuth = () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: GOOGLE_PATH_KEYACCOUNT,
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    return auth;
}

// google sheets api
const getGoogleSheet = async (auth) => {
    const client = await auth.getClient();
    const googleSheets = google.sheets({
        version: 'v4',
        auth: client
    });
    return googleSheets;
}

module.exports = {
    getAuth,
    getGoogleSheet
}
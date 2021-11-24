require("dotenv").config();

const config = {
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID || 'your_id_google_spreadsheets',
    GOOGLE_PATH_KEYACCOUNT: process.env.GOOGLE_PATH_KEYACCOUNT || 'your_path_key_account'
}

module.exports = config;
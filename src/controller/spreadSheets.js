/**
 * controller spreadsheet
 */
const {getGoogleSheet, getAuth} = require('../utils/utilsGoogleApis');
const config = require('../config');
const {GOOGLE_SHEET_ID} = config;
const spreadsheetId = GOOGLE_SHEET_ID;

exports.find = async (req, res) => {
    try {
        const auth = getAuth();
        const googleSheets = await getGoogleSheet(auth);
        const getSheetData = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: 'Sheet1!A1:D',
        });
        res.send(getSheetData.data);
    } catch (error) {
        res.send(error)
    }
}
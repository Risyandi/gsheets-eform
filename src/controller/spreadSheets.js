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

exports.create = async (req, res) => {
    try {
        const auth = getAuth();
        const googleSheets = await getGoogleSheet(auth);
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: 'Sheet1!A1:D',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [
                    ['hello2', 'hello2', 'hello2', 'hello2']
                ],
            },
        });
        res.send("submit successfully");
    } catch (error) {
        res.send(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const auth = getAuth();
        const googleSheets = await getGoogleSheet(auth);
        await googleSheets.spreadsheets.values.clear({
            auth,
            spreadsheetId,
            range: 'Sheet1!A5:D5',
        });
        res.send("delete successfully");
    } catch (error) {
        res.send(error)
    }
}

exports.update = async (req, res) => {
    try {
        const auth = getAuth();
        const googleSheets = await getGoogleSheet(auth);
        await googleSheets.spreadsheets.values.update({
            auth,
            spreadsheetId,
            range: 'Sheet1!A2:D2',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [
                    ['hello edit1', 'hello edit2', 'hello edit3', 'hello edit4']
                ],
            },
        });
        res.send("updated successfully");
    } catch (error) {
        res.send(error)
    }
}
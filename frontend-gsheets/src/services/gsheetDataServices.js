import xhr from "../plugins/xhr";

class gsheetDataServices {
    getAllData() {
        return xhr.get('/spreadsheet');
    }
    updateData() {
        return xhr.put('/spreadsheet');
    }
    deleteData() {
        return xhr.post('/spreadsheet/delete');
    }
    addData() {
        return xhr.post('/spreadsheet');
    }
}

export default new gsheetDataServices();
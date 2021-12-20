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
    addData(formdata) {
        return xhr.post('/spreadsheet', formdata);
    }
}

export default new gsheetDataServices();
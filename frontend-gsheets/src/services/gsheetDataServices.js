import xhr from "../plugins/xhr";

class gsheetDataServices {
    getAllData() {
        let responseData = [];
        xhr.get('/spreadsheet').then(response => {
            if (response.status !== 200) {
                responseData.push({
                    status: response.status,
                    statusText: response.statusText
                })
            } else {
                responseData.push({
                    status: response.status,
                    statusText: response.statusText,
                    data: response.data
                })
            }
        });
        return responseData;
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
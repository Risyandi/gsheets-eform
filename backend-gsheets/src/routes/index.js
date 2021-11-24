// import library
const express = require('express');
const cors = require('cors');
const router = express.Router();

// import controller
const spreadSheets = require("../controller/spreadSheets");

// export module
module.exports = function routes(app) {
  // allow cors origin access
  app.use(cors());

  // initial define route
  app.use('/api/v1/', router);

  app.get('/api/v1/', (req, res, next) => {
    res.json({
      "title": "api gsheets eform",
      "description": "endpoint api for google sheets eform",
      "version": "0.0.1"
    });
  });

  // all route
  router.get('/spreadsheet', spreadSheets.find);
  router.post('/spreadsheet', spreadSheets.create);
  router.post('/spreadsheet/delete', spreadSheets.delete);
  router.put('/spreadsheet', spreadSheets.update);

};

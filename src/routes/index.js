// import library
const express = require('express');
const cors = require('cors');
const router = express.Router();

// import controller
// const index = require("../controllers/Index");

// export module
module.exports = function routes(app) {
  // allow cors origin access
  app.use(cors());

  // define route
  app.use('/api/v1/', router);

  app.get('/api/v1/', (req, res, next) => {
    res.json({
      "title": "api gsheets eform",
      "description": "endpoint api for google sheets eform",
      "version": "0.0.1"
    });
  });
};

require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();

// require routes
require('./src/routes')(app);

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

// morgan logger setup
app.use(morgan('dev'));

// allow cors origin access
app.use(cors());

// parser request of content-type: application/json
app.use(express.json());

// parser request of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

// parse cookie
app.use(cookieParser());

// set express static
app.use('/public', express.static(path.join(__dirname, 'public')));

// set default request
app.get('/', (req, res) => {
  // res.json({
  //   "title": "welcome google sheets eform",

  // });
  res.render('index', {
    title: 'Google Sheets Eform API\'s',
    description: "Endpoint api for gsheets eform",
    version: "0.0.1"
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

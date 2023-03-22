var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bookRouter = require('./app/book/route');
const authRouter = require('./app/authentication/route');
const customErrorHandler = require('./middleware/customErrorHandler');
var app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', authRouter);
app.use('/books', bookRouter);

app.use(customErrorHandler);
// catch 404 and forward to error handler

// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   console.log(err.message);
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500).json({
//     status: "fail",
//     message: err.message,
//   });
  
// });

module.exports = app;

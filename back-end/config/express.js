const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const httpError = require('http-errors');
const methodOverride = require('method-override');

const routes = require('../routes/index.route');
const config = require('./config');
const passport = require('./passport');
const bp = require("body-parser");

const app = express();


app.use(express.static(path.join(__dirname, '../dist/')));


app.use(express.json());


// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(passport.initialize());

// API router
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new httpError(404);
    return next(err);
});

app.use((err, req, res, next) => {

    // customize Joi validation errors
    if (err.isJoi) {
      err.message = err.details.map(e => e.message).join("; ");
      err.status = 400;
    }
  
    res.status(err.status || 500).json({
      message: err.message
    });
    next(err);
  });

module.exports = app;
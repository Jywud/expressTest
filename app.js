var express = require('express');
var path = require('path');
var fs = require('fs');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');

var config = require('./config');
var routes = require('./routes/index');
var accessLog = fs.createWriteStream('./logs/access.log', {flags : 'a'});
var app = express();

// view engine setup
var port = process.env.PORT || config.port;
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(logger('combined', {stream : accessLog}));      //打印到log日志

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(partials());
app.use(cookieParser());
app.use('/', routes);

app.listen(app.get('port'), function(){
  console.log('Program starts running ...');
  console.log('listening on port: ' + app.get('port'));
});


module.exports = app;

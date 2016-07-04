//서버 기동을 위한 모듈 추가
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

//DB 연결을 위한 모듈 추가
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoDB');
var wikiDB = mongoose.connection;

var path = require('path');

var multiparty = require('connect-multiparty');

var async = require('async');
var flash = require('connect-flash');
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
	console.log('Server open');
});

//서버 기동을 위한 모듈 추가
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoDB');
var wikiDB = mongoose.connection;

var path = require('path');

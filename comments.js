//create web server
var express = require('express');
var app = express();
//create server
var http = require('http').Server(app);
//create socket
var io = require('socket.io')(http);
//create file system
var fs = require('fs');
//create mysql
var mysql = require('mysql');
//create body parser
var bodyParser = require('body-parser');
//create cookie parser
var cookieParser = require('cookie-parser');
//create session
var session = require('express-session');
//create session store
var MySQLStore = require('express-mysql-session')(session);
//create path
var path = require('path');
//create multer
var multer = require('multer');
//create upload
var upload = multer({dest: 'uploads/'});
//connect to database
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'comments'
});

//connect to database
con.connect(function(err) {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Connected!");
  }
});

//create session store
var sessionStore = new MySQLStore({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'comments'
});

//use session store
app.use(session({
  secret: 'secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

//use cookie parser
app.use(cookieParser());

//use body parser
app.use(bodyParser.urlencoded({extended: false}));

//use body parser
app.use(bodyParser.json());

//use public folder
app.use(express.static('public'));

//use public folder
app.use(express.static('uploads'));

//use public folder
app.use(express.static('node_modules'));

//use public folder
app.use(express.static('uploads'));

//use public folder
app.use(express.static('uploads'));

//use public f
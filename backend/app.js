var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var multer = require('multer');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views', 'upload');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/login',loginRouter);



app.get('/upload',function(req,res) {
  res.render('upload');
});
app.get('/regist', function(req, res){

});

app.post('/upload',function(req,res){
  res.send('UploadedTESTEST');
});
app.get('/regist', function(req, res){
  res.send('regist 이거 됐냐?');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// mysql 연동하는부분
var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: '!Tlqkfsorkdho',
  database: 'test_crud'  
});  
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql 왜연결안돼connection error');     
    console.error(err);     
    throw err;   
  } 
});
//연동 끝





module.exports = app;

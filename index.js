var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var cors = require('cors');

var con = mysql.createConnection({
    host: "localhost",
    user: "adminroot",
    password: "root1234",
    database: "tripodmedia"
  });

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/users', function(req, res){
    res.status(200);
    res.json({ username: 'Flavio' })
});


app.get('/user/add', function(req, res){
    res.sendfile('index.html');
});



app.get('/user/update', function(req, res){
    res.sendfile('index.html');
});


app.get('/user', function(req, res){
    res.sendfile('index.html');
});



app.get('/userlogin/{username}/{password}', function(req, res){
    res.sendfile('index.html');
});


app.get('/getStock', function(req, res){
    res.sendfile('index.html');
});


app.get('/insertStock', function(req, res){
    res.sendfile('index.html');
});



app.get('/favori', function(req, res){
    res.sendfile('index.html');
});


app.get('/kur', function(req, res){
    res.sendfile('index.html');
});



io.on('connection', function(socket){
    console.log('Kullanıcı bağlandı');
    socket.on('disconnect', function(){
    console.log('kullanıcı ayrıldı');
    });

    socket.on('sohbetmesaj', function(msg){
        console.log('Mesaj: ' + msg);
        io.emit('sohbetmesaj', msg);
    });
});

http.listen(8099, function(){
    console.log('8099 portu aktif');
});
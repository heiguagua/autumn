var express = require('express');
var app = express();
var path = require('path');

// Setting static resource for express
// var client = path.resolve(__dirname + '/../client');
// app.use(express.static(client));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Age', 1728000);
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method == 'OPTIONS') res.send(200);
  else next();
});

app.all('/api/user', function(req, res) {
  res.cookie
  res.json('{username:"hank",password:"admin"}');
});

app.listen(5000);

console.info('http-server[express] listening on 5000');

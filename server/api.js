var express = require('express');
var app = express();
var path = require('path');

var client = path.resolve(__dirname + '/../client');
app.use(express.static(client));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);
  else next();
});

app.all('/api/user', function(req, res) {
  res.json("{username:'hank',password:'admin'}");
});

app.listen(8000);

console.info("http-server[express] listening on 8000 ... ");

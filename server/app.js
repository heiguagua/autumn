var express = require('express');
var app = express();
var path = require('path');

var client = path.resolve(__dirname+'/../client');
app.use(express.static(client));

app.all('/api/user', function(req, res){
  res.send("{username:'hank',password:'admin'}");
});

app.listen(8000);

console.log("http-server[express] listening on 8000 ... ");

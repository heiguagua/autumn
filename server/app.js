var express = require('express');
var app = express();
var path = require('path');

var client = path.resolve(__dirname+'/../client');
app.use(express.static(client));

app.all('/api', function(req, res){
  res.send('hello autumn');
});

app.listen(3000);

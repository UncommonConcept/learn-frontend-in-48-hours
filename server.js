var express = require('express');
var app = express();
var fetch = require('isomorphic-fetch');

app.get('/', function (req, res) {
  // We are going to re-create the code we had to write in the node-introduction branch
  res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

var express = require('express');
var app = express();
var fetch = require('isomorphic-fetch');

app.get('/', function (req, res) {
   console.log(req.query);

   const dataSource = 'https://jsonplaceholder.typicode.com/posts';
   fetch(dataSource)
    .then(r => r.json())
    .then( (body) => {
      res.json(body[req.query.n]);
    })
    .catch(error => console.log(error));
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});

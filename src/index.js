var express = require('express');
var fetch = require('isomorphic-fetch');
var HttpStatus = require('http-status-codes');
var app = express();

/*
1. General function to build a Reddit URL:
  Aside from the host, it has 2 pieces:
  https://www.reddit.com/(r/news)(/rising)/.json
2. Use this function to return the URL just for the homepage API endpoint

In the next exercise, we will use this, along with routing, to handle the data
for ANY reddit URL! You will not have to hardcode any API endpoints.
*/

app.get('/', function (req, res) {
   console.log(req.query);

   const dataSource = 'https://jsonplaceholder.typicode.com/posts';
   fetch(dataSource)
    .then(r => r.json())
    .then( (body) => {
      res.status(HttpStatus.OK).json(body[req.query.n]);
    })
    .catch(error => console.log(error));
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});

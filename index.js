var http = require('http');
var https = require('https');
var url = require('url');

http.createServer(runServer).listen(8081);

function runServer(request, response) {
  const incomingUrl = url.parse(request.url);
  console.log(incomingUrl);
  console.log(incomingUrl.query);

  return https.get('https://jsonplaceholder.typicode.com/posts', respondWithData);
}

function respondWithData(response) {
  // Where does this code go?
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.end('Hello world! - ' + incomingUrl.query);

    response.on('data', function receiveData(d) {
      // You fill this in
    });

    response.on('end', function endResponse() {
      // You fill this in
      // Data reception is done, do whatever with it!
      var parsed = JSON.parse(body);

    });
}

console.log('Server is listening!');

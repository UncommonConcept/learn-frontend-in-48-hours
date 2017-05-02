var http = require('http');
var https = require('https');
var url = require('url');

http.createServer(runServer).listen(8081);

function runServer(request, response) {
  console.log('Received a request!');
  const incomingUrl = url.parse(request.url, true);
  console.log(incomingUrl);

  return responderFactory(response, incomingUrl.query);
}

function responderFactory(serverResponse, queryParams) {
  const dataSource = 'https://jsonplaceholder.typicode.com/posts';
  return https.get(dataSource,
    httpResponse => respondWithData(serverResponse, httpResponse, queryParams)
  );
}

function respondWithData(serverResponse, httpResponse, queryParams) {

    var data = '';
    httpResponse.on('data', function receiveData(d) {
      // You fill this in
      data += d;
    });

    httpResponse.on('end', function endResponse() {
      // You fill this in
      // Data reception is done, do whatever with it!
      var parsed = JSON.parse(data);

      const selectedPost = queryParams.n ? parsed[queryParams.n] : null;

      serverResponse.writeHead(200, { 'Content-Type': 'application/json' });
      serverResponse.end(JSON.stringify(selectedPost));
    });
}

console.log('Server is listening!');


const getParams = query => {
  if (!query) {
    return { };
  }

 return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, { });
};
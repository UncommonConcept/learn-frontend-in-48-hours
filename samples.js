
var input = document.getElementById('blah');
input.onclick = (event) {
  console.log(event);
}
input.addEventListener('click', (event) {
  console.log(event):
})

function getData(callback) {
  http.get('http://yahoo.com', (response) {
    getResponse(respons);
    callback();
  });
  return;
}

function getResponse(response) {
  var d = '';
  response.on('data', (data) {
    d += data;
  })

  response.on('end', () {
    console.log(d);
  })
}
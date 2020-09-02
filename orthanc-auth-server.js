/* orthanc-auth-server.js */

var port = 8000;

var http = require('http');
var url = require('url');

function GrantAccess(response, granted, validity) {
  var answer = {
    granted: granted
  }

  if (typeof validity == 'number') {
    answer.validity = validity;
  }

  response.writeHead(200, { 'Content-Type' : 'application/json' });
  response.end(JSON.stringify(answer));
}

var server = http.createServer(function(request, response) {
  console.log('METHODE = ' + request.method);
  if (request.method == 'POST') {
    var body = '';

    request.on('data', function (data) {
      body += data;
    });

    request.on('end', function () {
      console.log('Received authorization body request: ' + body);
      console.log('HTTP POST headers: ' + JSON.stringify(request.headers));

      var query = JSON.parse(body);

      console.log('POST Access. ');
      //GrantAccess(response, query["level"] != "system", 5);
      GrantAccess(response, true, 5);
      //GrantAccess(response, false, 5);
    });

  } else if (request.method == 'GET') {
    console.log('HTTP GET headers: ' + JSON.stringify(request.headers));
		console.log('GET Access. ');
		GrantAccess(response, true, 5);
  } else if (request.method == 'DELETE') {
    console.log('HTTP DELETE headers: ' + JSON.stringify(request.headers));
		console.log('DELETE Access. ');
		GrantAccess(response, true, 5);
  } else {
    response.writeHead(405);
    response.end();
  }
});


console.log('The demo is running at http://localhost:' + port + '/');
server.listen(port);

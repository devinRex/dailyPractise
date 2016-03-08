var http = require("http");

var serverhandel = function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
};

function serverRequest() {
	http.createServer(serverhandel).listen(8219);
}

exports.serverRequest = serverRequest;

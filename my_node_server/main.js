const port = 3000,
    http = require("http"),
    fs = require("fs"),
    httpStatus = require("http-status-codes"),
    routes = {
        "/": "satic_files/content.html"
    },
    app = http.createServer((request, response) => {
    console.log("Recieving an incoming request!");
    console.log(request.url);

    response.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html"
    });
    if (routes[request.url]) {
        fs.readFile(routes[request.url], (error, data) => {
            response.write(data);
            response.end();
        });
    } else {
        response.end("<h1>Sorry, page not found.</h1>");
    }
});

app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
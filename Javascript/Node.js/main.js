var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathName = url.parse(_url, true).pathname;
    if (pathName === "/") {
        if (queryData.id === undefined) {
            fs.readdir("./data", function(error, filelist) {
                var title = "Welcome";
                var content = "Hello Node.js";
                var list = "<ul>";

                var i = 0;
                while (i < filelist.length) {
                    list =
                        list +
                        `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i += 1;
                }

                list = list + "</ul>";

                var template = `<!doctype html>
           
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      ${list}
      <h2>${title}</h2>
      </p>${content}</p>
    </body>
    </html>
    `;
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readFile(`data/${queryData.id}`, "utf-8", function(
                err,
                content
            ) {
                fs.readdir("./data", function(error, filelist) {
                    var title = "Welcome";
                    var content = "Hello Node.js";
                    var list = "<ul>";

                    var i = 0;
                    while (i < filelist.length) {
                        list =
                            list +
                            `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                        i += 1;
                    }

                    list = list + "</ul>";

                    var template = `<!doctype html>
           
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      ${list}
      <h2>${title}</h2>
      </p>${content}</p>
    </body>
    </html>
    `;
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else {
        response.writeHead(404);
        response.end("Welcome");
    }
});
app.listen(3000);

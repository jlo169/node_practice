const http = require('http');
const url = require('url');
const fs = require('fs');

// if address is: http://localhost:8080/default.htm?year=2017&month=february
// host is: localhost:8080
// pathname is: /default.htm
// search is: ?year=2017&month=february

//url.parse will take 2 params, first is url and other is boolean. 
//True turns parse into object while false keeps it as string 

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);
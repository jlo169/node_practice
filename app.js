const http = require('http');
const date = require('./firstModule');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The current date is: " + date.theCurrentDate());
    res.end('pug');
}).listen(8080);
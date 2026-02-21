const log = require('pretty-log');
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Dit werkt?\n');
});

server.listen(port, hostname, () => {
    log.success(`Server running at http://${hostname}:${port}/`);
});
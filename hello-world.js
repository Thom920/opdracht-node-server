const log = require('pretty-log');
const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Dit werkt!\n');
});

server.listen(port, () => {
    log.success(`Server running at port ${port}`);
});

#!/usr/bin/env node

const http = require('http')

if (process.argv.length < 3) {
    console.log('Usage: httpok <port>');

    process.exit(1);
}

const hostname = 'localhost'
const port = parseInt(process.argv[2]);

if (isNaN(port)) {
    console.log('Port must be a valid number');

    process.exit(1);
}

const server = http.createServer((req, res) => {
    let data = '';

    req.on('data', chunk => {
        data += chunk;
    })

    req.on('end', () => {
        console.log(req.method + ' ' + req.url + ' ' + data);

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('OK\n')
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
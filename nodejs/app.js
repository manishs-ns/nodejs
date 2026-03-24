const http = require('http');
const fs = require('fs');

let count = 0;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        const data = fs.readFileSync('index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    }

    else if (req.url === '/click') {
        count++;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(count.toString());
        res.end();
    }

    else {
        res.writeHead(404);
        res.end("Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
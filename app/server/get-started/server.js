const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
    res.end('Hello Nginx');
});

server.listen(port, () => {
    console.log('Server is listen on port ' + port);
});

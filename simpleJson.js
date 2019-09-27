const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const obj = {
    brand: 'Renault',
    model: 'Grand Scenic',
    year: 2013,
    mileage: '120000 km'
  };

  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf8' });
  res.end(JSON.stringify(obj));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// http://127.0.0.1:3001/echo?message=Hello --> Hello
// http://127.0.0.1:3001/anyOtherPath --> Page not found

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  //res.end();

  const urlParsed = url.parse(req.url, true);
  console.log(urlParsed);

  if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
    res.end(urlParsed.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

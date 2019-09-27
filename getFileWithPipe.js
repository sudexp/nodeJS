// 1. run server (node getFileWithPipe.js)
// 2. open in browser http://localhost:3000/big.html

const http = require('http');
const fs = require('fs');

new http.Server((req, res) => {
  // res instanceof http.ServerResponse < stream.Writable

  if (req.url === '/big.html') {
    const file = new fs.ReadStream('public/big.html');
    sendFile(file, res);
  }
}).listen(3000);

const sendFile = (file, res) => {
  file.pipe(res);

  file.on('error', err => {
    res.statusCode = 500;
    res.end('Server Error');
    console.error(err);
  });

  file.on('open', () => console.log('open')).on('close', () => console.log('close'));

  res.on('close', () => file.destroy());
};

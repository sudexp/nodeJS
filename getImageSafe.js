// 1. run server (node getImageSafe.js)
// 2. open in browser http://localhost:3000/index.html?secret=image_nodejs

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const ROOT = __dirname + '/public/';

http
  .createServer((req, res) => {
    if (!checkAccess(req)) {
      res.statusCode = 403;
      res.end('Tell me the secret to access!');
      return;
    }
    sendFileSafe(url.parse(req.url).pathname, res);
  })
  .listen(3000);

const checkAccess = req => url.parse(req.url, true).query.secret === 'image_nodejs';

const sendFileSafe = (filePath, res) => {
  try {
    filePath = decodeURIComponent(filePath); // %D1%8F
  } catch (e) {
    res.statusCode = 400;
    res.end('Bad Request');
    return;
  }

  if (~filePath.indexOf('\0')) {
    res.statusCode = 400;
    res.end('Bad Request');
    return;
  }

  filePath = path.normalize(path.join(ROOT, filePath));

  if (filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end('File not found');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }
    sendFile(filePath, res);
  });
};

// TODO: modify this function
const sendFile = (filePath, res) =>
  fs.readFile(filePath, (err, content) => {
    if (err) console.log(err);

    const mime = require('mime').getType(filePath); // npm install mime
    res.setHeader('Content-Type', mime + '; charset=utf-8');
    res.end(content);
  });

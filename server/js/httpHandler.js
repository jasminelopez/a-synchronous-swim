const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, headers);
      res.end('right');
      } else if (req.url === 'spec/missing.jpg') {
        res.writeHead(404, headers);
        res.end();
      } else if (req.url === 'spec/background.jpg') {
        res.writeHead(200, headers);
        res.end();
      }
  } if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'POST') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === '') {
    res.writeHead(200, headers);
    res.end();
  }
  next();
};

  /* -- GY
  module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.end();
};
module.exports = {
  mock: (url, method, postdata) => {
    return {
      req: new request(url, method, postdata),
      res: new response
*/
/* Original problem code
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  console.log(req.url);
  res.end();
  }
*/

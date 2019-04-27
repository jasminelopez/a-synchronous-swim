const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  //console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET') {
/*if GET, 
'should respond to a GET request for a swim command'
expect(res._responseCode).to.equal(200);

'should respond with 404 to a GET request for a missing background image'
httpHandler.backgroundImageFile = path.join('.', 'spec', 'missing.jpg');
  let {req, res} = server.mock(httpHandler.backgroundImageFile , 'GET');
expect(res._responseCode).to.equal(404);

'should respond with 200 to a GET request for a present background image', */
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else if (req.method === 'POST') {
/*if POST
'should respond to a POST request to save a background image'
??'should send back the previously saved image' */
  }
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

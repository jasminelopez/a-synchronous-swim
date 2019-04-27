
const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const server = require('./mockServer');
const serverUrl = 'http://127.0.0.1:3000';

const httpHandler = require('../js/httpHandler');

describe('server responses', () => {

  it('should respond to a OPTIONS request', (done) => {
    let {req, res} = server.mock('/', 'OPTIONS');

    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
    expect(res._data.toString()).to.be.empty;

    done();
  });

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

  it('should respond to a GET request for a swim command', (done) => {
    let {req, res} = server.mock('/', 'GET');

    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200);
    expect(res._ended).to.equal(true);
    done();
    });

  it('should respond with 404 to a GET request for a missing background image', (done) => {
    httpHandler.backgroundImageFile = path.join('.', 'spec', 'missing.jpg');
    let {req, res} = server.mock(httpHandler.backgroundImageFile , 'GET');

    httpHandler.router(req, res, () => {
      expect(res._responseCode).to.equal(404);
      expect(res._ended).to.equal(true);
      done();
    });
  });

  it('should respond with 200 to a GET request for a present background image', (done) => {
    // write your test here
    done();
  });

  xit('should respond to a POST request to save a background image', (done) => {
    // write your test here
    done();
  });

  xit('should send back the previously saved image', (done) => {
    // write your test here
    done();
  });
});

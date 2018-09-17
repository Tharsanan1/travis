let assert = require('assert');
require("babel-polyfill");
let server = require('express')();
let http = require('http');
let httpServer;

// The function passed to before() is called before running the test cases.
before(function() {
    require('./src/routes')(server);
    httpServer = server.listen(8080);
});

// The function passed to after() is called after running the test cases.
after(function() {
    httpServer.close();
});

// test
describe('/', function() {
    it('should be Hello world', function(done) {
        http.get('http://127.0.0.1:8080/node', function(response) {
            // Assert the status code.
            assert.equal(response.statusCode, 200);

            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                // Let's wait until we read the response, and then assert the body
                // is 'Hello, Mocha!'.
                body = JSON.parse(body);
                assert.equal(body.success, true);

                done();
            });
        });
    });
});

describe('/', function() {
    it('should be Hello world', function(done) {
        http.get('http://127.0.0.1:8080/node', function(response) {
            // Assert the status code.
            assert.equal(response.statusCode, 200);

            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                // Let's wait until we read the response, and then assert the body
                // is 'Hello, Mocha!'.
                body = JSON.parse(body);
                let len = body.data.length;
                let bool = len > 0;
                assert.equal(bool, true);
                done();
            });
        });
    });
});
let assert = require('assert');
require("babel-polyfill");
let server = require('express')();
let http = require('http');
let httpServer;

// The function passed to before() is called before running the test cases.
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

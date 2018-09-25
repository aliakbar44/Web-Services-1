var assert = require('assert');
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var http = require('http');

var api = require('../api.js');

describe('api', function() {


	it('should get 200 status code and USERID 1 from GET(Test data - https://jsonplaceholder.typicode.com/posts/1) method', function(done) {
	
		api.get(function(err, result) {
				var objectValue = JSON.parse(result);
			assert.equal(1, objectValue.id);
			done();
		});
	});

	it('should get 201 and ID ==1 from POST(Test data - Test data - https://jsonplaceholder.typicode.com/posts) method', function() {

		var params = { foo: 'bar' };
api.post(params, function(err, result) {
	var objectValue = JSON.parse(result);
	assert.equal(1, objectValue.id);
});
	});

	
});
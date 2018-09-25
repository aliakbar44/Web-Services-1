var assert = require('assert');

var api = require('./api.js');

api.get(function(err, result) {
	var objectValue = JSON.parse(result);
    console.log("User ID from GET(Test data - https://jsonplaceholder.typicode.com/posts/1) method "+objectValue.userId);
	assert.equal(1, objectValue.userId);
	console.log(result.data);
});

var params = { foo: 'bar' };
api.post(params, function(err, result) {
	var objectValue = JSON.parse(result);
	console.log("User ID from POST(Test data - Test data - https://jsonplaceholder.typicode.com/posts) method "+objectValue.id);
	assert.equal(1, objectValue.id);
});
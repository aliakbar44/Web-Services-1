var http = require('http');
var assert = require('assert');

module.exports = {
get: function(callback) {
	var req = http.request({
		hostname: 'jsonplaceholder.typicode.com',
		path: '/posts/1'
	}, function(response) {
		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		});
		assert.equal(200, response.statusCode);
		response.on('end', function() {
			//callback(null, JSON.parse(data));
			callback(null, data);
		});
	});
	
	req.on('error', function(err) {
		callback(err);
	});

	req.end();
},

post: function(data, callback) {
	var req = http.request({
		hostname: 'jsonplaceholder.typicode.com',
		path: '/posts',
		method: 'POST'
	}, function(response) {
		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		});
		assert.equal(201, response.statusCode);
		response.on('end', function() {
			callback(null, data);
		});
	});

	req.write(JSON.stringify(data));

	req.end();
}
};
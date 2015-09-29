var express = require('express');
var fs = require('fs');

var port = 10000;
var baseDir = './app';

var app = express();

app.get('/', function(req, res) {
	fs.readFile('app/Views/Home/Index.cshtml', 'utf8', function(err, data) {
		res.send(data);
	});
});

app.get(/\~\/.*/, function(req, res) {
	var path = req.url.replace(/^\/~\//, '');

	res.sendFile(path, {
		root: __dirname + '/app'
	});
});

app.use(express.static(baseDir));

app.listen(port, function() {
	console.log('App listening at http://localhost:%s', port);
});

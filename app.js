var express = require('express');
var http = require('http');
var template = require('art-template');

var app = express();

template.config('base', '');
template.config('extname', '.html');

console.log('Server start...');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', './templates');

var data = {
				name:'wshp'
			};

app.get('/', function (rq, rs) {
	
	console.log('render');
	rs.render('index', data, function(err, html){
		rs.writeHead(200, {'Content-Type': 'text/html'});
		rs.end(html);
		console.log(html);
	});

	

	
});

var server = http.createServer(app);

server.listen(3000);
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

var indexPageRender = template.compile('./templates/index');
console.log(indexPageRender(data));

var testHtml = template.renderFile('./templates/index', data);
console.log(testHtml);

app.get('/', function (rq, rs) {
	
	console.log('render');
	
	rs.writeHead(200, {'Content-Type': 'text/html'});
	rs.end(testHtml);

	// rs.render('index', data, function(err, html){
		
	// });

	

	
});

var server = http.createServer(app);

server.listen(3000);
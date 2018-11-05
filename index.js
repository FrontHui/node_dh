var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function(sreq, sres){
    var url_parts = url.parse(sreq.url);
    console.log(url_parts + '请求rul');
    var options = {
        host: 'tool.oschina.net',
        port: 80,
        path: url_parts.pathname,
        headers: sreq.headers
    };

    var creq = http.get(options, function (cres) {
        sres.writeHead(cres.statusCode, cres.headers);
        cres.pipe(sres);
    });
    sreq.pipe(creq);
}).listen(1337,"127.0.0.1", function () {
	console.log('服务端开始监听');
});
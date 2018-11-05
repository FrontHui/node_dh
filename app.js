var http = require('http');
var fs = require('fs');
// var server = http.createServer(function(req, res){
// 	if (req.url !== '/favicon.ico') {
// 		var out = fs.createWriteStream('./request.log');
// 		out.write('客户端请求所用方法为: ' + req.method + '\r \n');
// 		out.write('客户端请求所用url字符串为: ' + req.url + '\r \n');
// 		out.write('客户端请求所用请求头对象为: ' + JSON.stringify(req.headers) + '\r\n');
// 		out.write('客户端请求所用HTTP版本为: ' + req.httpVersion + '\r\n');
// 	}
// 	res.end('开启node天路');
// }).listen(1337,"127.0.0.1", function () {
// 	console.log('服务端开始监听');
// });
// server.on('close', function() {console.log('10s close server')});
var server = http.createServer(function(req, res){
	if (req.url !== '/favicon.ico') {
		req.on('data', function(data) {
			console.log('服务端接收到数据：' + decodeURIComponent(data));
		})
		req.on('end', function() {
			console.log('客户端请求数据已全部接收完毕');
		})
	}
	res.end('node start buy duhui');
}).listen(1337,"127.0.0.1", function () {
	console.log('服务端开始监听');
});
server.on('error', function (e) {
	if (e.code === 'EADDRINUSE') {
		console.log('服务端地址以及端口已被占用');
	}
})
// 监听客户端和服务端连接
server.on('connection', function (socket) {
	console.log('客户端连接已建立。');
})
// 服务器超时
// server.timeout = 1000 * 60;
// console.log(server.timeout);
// server.on('timeout', function (socket) {
// 	console.log('服务器超时。');
// 	// console.log(socket)
// });

// 获取客户端请求信息

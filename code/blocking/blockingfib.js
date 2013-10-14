var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
  fibonacciRunner();
});

function fibonacciRunner()
{
	console.log("Fibonacci number 26 is: " + fib(26));
}

function fib(number)
{
	console.log(number);
	if(number <= 1)
		return 1;
	return fib(number - 1) + fib(number -2);
}

server.listen(1337, '127.0.0.1');
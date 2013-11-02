var net = require('net');
var Worker = require('webworker-threads');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);

  var worker = Worker.create();
  worker.eval(fib).eval('fib(30)',cb);
});

function cb(err,data)
{
	process.stdout.write("Fibonacci number 30 is: " + data);
}

function fib(number)
{
	console.log(number);
	if(number <= 1)
		return 1;
	return fib(number - 1) + fib(number -2);
}

server.listen(1337, '127.0.0.1');
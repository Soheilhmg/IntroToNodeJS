var fs = require('fs');

console.log("Starting to write");
fs.writeFile("output.txt", "Greetings friends!", function()
	{
		console.log("File write done.");
	});
console.log("Done.");
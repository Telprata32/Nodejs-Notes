//=========== Streams ==========//

const {createReadStream} = require('fs') // Get the createReadStream function from the fs module that creates a readable file stream

// As opposed to readFile like in ./fs_async.js , this function allows the file to be read chunk by chunk without storing it entirely into the memory to optimize file reading operations 

// createReadStream allows user to control the size of the chunk allowed for each buffer using "highWaterMark" option
// Default buffer size: 64kb
// Last buffer - stores remainder chunk
// ==== Example ====
// const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})

const stream = createReadStream('./content/big.txt')

// This line is to wait until the readable stream is valid before console logging the stream of data
stream.on('data',(result)=>{
	console.log(result)
})

// This catches any errors that happen while creating the readable stream (usually invalid names)
stream.on('error', (err)=>{
	console.log(err)
})


// ============= Serving file over HTTP ============== //

// The standard method to serve a file via the http service
var http = require('http')
var {readFileSync} = require('fs')

// using readfile doesn't break up the file into chunks, so if the file is big, the transfer will be slow
http
	.createServer(function(req,res){
		const text = readFileSync('./content/big.txt','utf8')
		res.end(text)
	})
	.listen(5000)

// Alternative method: using the createReadStream function, this helps to drastically transmit/transfer small chunks of data to optimize loading speed
var http = require('http')
var {createReadStream} = requre('fs')

http
	.createServer(function(req,res){
		const filestream = createReadStream('./content/big.txt','utf8')
		filestream.on('open',()=>{
			fileStream.pipe(res)
		})
		fileStream.on('error',()=>{
			res.end(err)
		})
	})

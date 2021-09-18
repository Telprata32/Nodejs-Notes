//=========== Streams ==========//

const {createReadStream} = require('fs') // Get the createReadStream function from the fs module that creates a readable file stream

// As opposed to readFile like in ./fs_async.js , this function allows the file to be read chunk by chunk without storing it entirely into the memory to optimize file reading operations 

// createReadStream allows user to control the size of the chunk allowed for each buffer using "highWaterMark" option
// Default buffer size: 64kb
// Last buffer - stores remainder chunk
// ==== Example ====
// const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})

const stream = createReadStream('./content/big.txt')

// Set the event emitter to listen to the stream's return of data
stream.on('data',(result)=>{
	console.log(result)
})

// Use Callbacks instead of executing the function as per usual, 
// All the API's of Node are written such that they support callbacks.
const {readFile, writeFile} = require('fs')

// read the first text file first 
readFile('./content/first.txt', 'utf8', (err,result)=>{
	if(err){
		console.log(err)
		return
	}
	const first = result

	// Then read the second text file 
	readFile('./content/second.txt','utf8',(err,result)=>{
		if(err){
			console.log(err)
			return
		}

		const second = result

		// Write the two results into a another text file
		writeFile('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, (err,result)=>{
			if (err){
				console.log(err)
				return
			}
		})
	})
})

// Asynchronous functions/codes proceeds with the next process before the previous process is done
// AKA : Non-blocking code ; because the program continues executing and doesnt't wait for available resources
//
// Given the following code:
// 	
// 		console.log('first')		
//
// 		setTimeout(()=>{
// 			console.log('second')
// 		},0)
//
// 		console.log('Third')
//
// 	You would think that because the setTimeout() is set to 0, that the program would have time to execute the second console.log();
// 	But because setTimeout() is an Asysnchronous function, it will be off-loaded and that the next line would be executed first.
//  The process will return to the setTimeout(), function to invoke its callback


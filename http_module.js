const http = require('http');

// ==== http create server callback function ==== //

// Example:
/*
 * 	const server = http.createServer((req,res)=>{
	//req represents the incoming request 
 	//res (response) is what is sent back
 		res.write("some text") // write some text on the web page
		res.end()	// End the request in a quick way and do not need to send any data some text can be included in the parameter of the res.end() function as well, the text will appear on the page
  	})
 */

const server = http.createServer((req,res)=>{
	// If the url points to the root of the localhost this is the response
	if(req.url === '/'){
		res.end("Welcome to our home page")	
		return
	}
	// If teh url points to localhost/about, this is the response
	if(req.url === '/about'){
		res.end("This is our short history")
		return
	}
	// This is the response if the requested path is non existent or wrong
	res.end(`
		<h1>OOps!</h1>
		<p> We can't seem to find the page </p>
		<a href = "/"> back home </a>
	`)
})

server.listen(5000)

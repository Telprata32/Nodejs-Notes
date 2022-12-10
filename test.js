const http = require('http')

// This function will execute when a request is sent to the port specified inside server.port()
const server = http.createServer((req,res)=>{
	const url = res.url; //Get the url attribute from the response(res)
    
    //If directed to homepage url
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'}) //res.writeHead(status code, content type)
		res.write('<h1> home page </h1>')
		res.end() // The res.end() method signals to the server that all response have been sent, at the same time the data "home page" is sent back together
		return // Don't forget to use return when you have multiple res.end() like when used with an if-else statement
    }
    //If directed to about page url
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'}) //res.writeHead(status code, content type)
		res.write('<h1> About page </h1>')
		res.end() // The res.end() method signals to the server that all response have been sent, at the same time the data "home page" is sent back together
		return // Don't forget to use return when you have multiple res.end() like when used with an if-else statement
    }
    //If url referenced is not available or doesnt exist, return a ERROR 404 code
    else{
        res.writeHead(404,{'content-type':'text/html'}) //res.writeHead(status code, content type)
		res.write('<h1> Page Not Found </h1>')
		res.end() // The res.end() method signals to the server that all response have been sent, at the same time the data "home page" is sent back together
		return // Don't forget to use return when you have multiple res.end() like when used with an if-else statement
    }
})
server.listen(5000) // listen for request to port 5000

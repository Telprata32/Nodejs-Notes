

# HTTP module

*This is to recap on the previous HTTP lesson and expand on it*

## The Basic

The basic http server object will be as shown below:

```javascript
const http = require('http')

// This function will execute when a request is sent to the port specified inside server.port()
const server = http.createServer((req,res)=>{
	console.log('user hit the server') 
	res.end('home page') // The res.end() method signals to the server that all response have been sent, at the same time the data "home page" is sent back together
	return // Don't forget to use return when you have multiple res.end() like when used with an if-else statement
})

server.listen(5000) // listen for request to port 5000
```



`res.end(data)` is no different from `res.write(data)` and then `res.end()`; Example below is the same as example above:

```javascript
const http = require('http')

// This function will execute when a request is sent to the port specified inside server.port()
const server = http.createServer((req,res)=>{
	console.log('user hit the server') 
	res.write('home page')
	res.end() // The res.end() method signals to the server that all response have been sent, at the same time the data "home page" is sent back together
	return // Don't forget to use return when you have multiple res.end() like when used with an if-else statement
})

server.listen(5000) // listen for request to port 5000
```



In practice, it is more favorable to `res.write()` to the response before ending the response message, this way you can append more data/info such as the response header before ending it

### <u>Using <span style="color:crimson">res.writeHead</span> (Adding metadata to the response)</u>

The <span style="color:crimson">res.writeHead()</span> method includes the:

- Status Code
- Content Type

Example:

```javascript
const server = http.createServer((req,res)=>{
	res.writeHead(200,{'content-type':'text/html'}) //res.writeHead(status code, content type)
	res.write('<h1> home page </h1>')
	res.end() // The res.end() method signals to the server that all response have been sent, at the same time the data "home page" is sent back together
	return // Don't forget to use return when you have multiple res.end() like when used with an if-else statement
})
```

Result:

![image-20220120193133012](/home/a_rahim/.config/Typora/typora-user-images/image-20220120193133012.png)

<span style="color:purple">*If the content-type is text/plain, then a plain text \<h1>Home Page\</h1> would have appeared, instead of the heading element*</span>

## <u>Controlling the resources sent based on the url</u>

Different responses (res) depending on the <span style="color:orangered">URL</span> the web browser is redirected to, For Example:

```javascript
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
```



### <u>Returning entire HTML files</u>  (Timestamp = [4:34:24](https://www.youtube.com/watch?v=Oe421EPjeBE&t=16464s))

- Similar to the previous method, but instead of the serving an HTML tag, serve an entire HTML file.

- Make sure to include the *<span style="color:green">readFileSync</span>* from the *<span style="color:green">fs</span>* module, like so:

  ~~~javascript
  const {readFileSync} = require('fs');
  ~~~

  Later in the code assign `const homepage = readFileSync(./index.html)` , then when returning the resources return the entire file when the server receive a request for the *<span style="color: purple">homepage</span>*, serve it like so:

  ```javascript
  if(url === '/'){
      res.writeHead(200,{'content-type':'text/html'}) //res.writeHead(status code, content type)
      res.write(homepage)
      res.end() // The res.end() method signals to the server that all response have been sent, at the same time the data "home page" is sent back together
      return // Don't forget to use return when you have multiple res.end() like when used with an if-else statement
  }
  ```

  Similarly repeat this method for other requested pages.

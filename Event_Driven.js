// Info about Event-Driven Programming: https://www.tutorialspoint.com/concurrency_in_python/concurrency_in_python_eventdriven_programming.htm 

const EventEmitter = require('events')

// ================== Event Emitter =====================//
// Event emitter Document: https://nodejs.dev/learn/the-nodejs-event-emitter

// Create a EventEmitter class
const customEmitter = new EventEmitter()

// Listen to an event labelled as 'response' until it is emitted assigned to variable 'customEmitter'
customEmitter.on('response',()=> {
	console.log('data received')
})

// Emit the event 'response' being listened to by the EventEmitter Class
customEmitter.emit('response')

/* The ordering in the syntax of the codes matter:
* 	- The 'emit' must come after the 'on'
* 	- The EventEmitter would need to listen to the event before emitting it
*/

/*== Part 2 ==*/
// Some module's functions may be invoked by treating them like an EventEmitter class, and then using the standard EventEmitter procedures
// For example, with the http module, similar to in http_module.js:

const http = require('http')

// Using EventEmitter API
const server = http.createServer()
// emits request event
// subscrive to it / listen for it / respond to it
server.on('request',(req,res)=>{
	res.end('welcome')
})

sever.listen(5000)

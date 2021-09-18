// Promises - an organized way to write out callback functions; eliminates nested callback functions

// Example 1: Use the promise by default

var num = 5
const p1 = new Promise((resolve, reject) => {
	if(num > 5){
		resolve('Criteria met')
	}
	else{
		reject('Number not high enough')
	}
})

p1.then((sucMessage)=>console.log(sucMessage)).catch((Alert)=>console.log(Alert))


// Example 2: Use promise within an anonymous function

var checkNum = (num) => {
	return new Promise((resolve,reject)=>{
		if (num > 5){
			resolve('Criteria met')
		}
		else{
			reject('Number not high enough')
		}
	})
}

checkNum(7).then((sucMessage) => console.log(sucMessage)).catch((error) => console.log(error))

// Extra Resources on Promises: 
// - Chaining Promises: https://www.javascripttutorial.net/es6/promise-chaining/ 

// =================    Util - Promisify =====================//
// util.promisify() from the "util" module can help turn callback-based functions into promise-based functions
// More Info: https://masteringjs.io/tutorials/node/promisify

// Example: 
const fs = require('fs');
const util = require('util');

// Convert `fs.readFile()` into a function that takes the
// same parameters but returns a promise.
const readFile = util.promisify(fs.readFile);

// You can now use `readFile()` with `await`!
const buf = await readFile('./package.json');

const obj = JSON.parse(buf.toString('utf8'));
obj.name; // 'masteringjs.io'

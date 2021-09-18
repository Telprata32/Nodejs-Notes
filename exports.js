// About Exports 
// To share variables publically add them to the exports

// Local variables
const john = "john"

// Public variables
const lucy = "lucy"
const jessie = "Jessie"


//function
const sayHi = (name) => {
	console.log(`Hello there ${name}`)
}

// Make the two variables and the function public by adding to the module's exports
module.exports = {lucy, jessie, sayHi} 

// sayHi(john)
// sayHi(lucy)

// Prints the info of the current module
// ==> console.log(module)
// GLOBALS - to counter the fact that there is no window object in Node js

// List of most common globals in nodejs: 

// __dirname	- path to current directory
// __filename 	- file name
// require		- function to use modules 
// module 		- info about current modules
// process  	- info about env where the program is being executed

// Node adopts CommonJS by default

//=== Modules ===//
// Modules - Encapsulated Code (only share minimum)
// In CommonJS, every file is module (by default)

console.log(__dirname)
// This module is to demonstrate that modules can be executed in the back ground by having the just being included in the module being executed with a require() function
const num1 = 5;
const num2 = 10;

function addValues(){
	console.log(`the sum is: ${num1 + num2}`);
}

addValues()

// Node Calculator Story Point 41
const readlineSync = require("readline-sync");  /*Used to import and make available the "readline-sync" 
//                               				module in my Node.js script. This allows me to create interactive 
//												command-line programs that take user input and provide output 
//												synchronously. The require function is used to import the module, 
//												and I store its functionality in the readlineSync constant.*/

const num1 = +readlineSync.question("Please enter your first number. ");	// -DONE- Each function will have 2 parameters, `num1`, `num2`
//																				 -DONE- *Please enter your first number* (store that number)
const num2 = +readlineSync.question("Please enter your second number. ");	// -DONE- *Please enter your second number* (store that number)	

//						*NOTE the + operator before readlineSync.question(...)
//						is a concise way to ensure that the input stored 
//						in num1 and num2 is treated as numeric values.

const operation = ['add', 'sub', 'mul', 'div']	// -DONE- *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
const operatorIndex = readlineSync.keyInSelect(operation, "What operation to use? ");

let result;

function add(num1, num2) {			// -DONE- A function that adds two numbers and returns the result
	return num1 + num2;
}
function multiply(num1, num2) {		// -DONE- A function that multiplies two numbers and returns the result
	return num1 * num2;
}
function divide(num1, num2) {		// -DONE- A function that divides two numbers and returns the result
	return num1 / num2;
}
function subtract(num1, num2) {		// -DONE- A function that subtracts two numbers and returns the result
	return num1 - num2;
}

if (operatorIndex === 0) {				//*NOTE* Using an if statement here to read the value of "operatorIndex"
	result = add(num1, num2); 
	} else if (operatorIndex === 1) {	
	result = multiply(num1, num2);
	} else if (operatorIndex === 2) {	
	result = divide(num1, num2);
	} else if (operatorIndex === 3) {
	result = subtract(num1, num2)
	}
// 												-DONE- Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
	console.log("The result is: " + result)
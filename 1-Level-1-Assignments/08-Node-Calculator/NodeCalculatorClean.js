/*########################################## Node Calculator Story Point 41 ##########################################*/
/*###################################################### Clean #######################################################*/
/*################################################## Instructions ####################################################*/
//  Used to import and make available the "readline-sync"module in my Node.js script. This allows me to               //
//  create interactive command-line programs that take user input and provide output synchronously.The require        //
//  function is used to import the module, and I store its functionality in the readlineSync constant.*/              //
/**********************************************************************************************************************/

const readlineSync = require("readline-sync");
const num1 = +readlineSync.question("Please enter your first number. ");	
const num2 = +readlineSync.question("Please enter your second number. ");	

const operation = ['add', 'sub', 'mul', 'div']	
const operatorIndex = readlineSync.keyInSelect(operation, "What operation to use? ");

let result;
function add(num1, num2) {			
	return num1 + num2;
}
function multiply(num1, num2) {		
	return num1 * num2;
}
function divide(num1, num2) {		
	return num1 / num2;
}
function subtract(num1, num2) {		
	return num1 - num2;
}

if (operatorIndex === 0) {				
	result = add(num1, num2); 
	} else if (operatorIndex === 1) {
	result = subtract(num1, num2);
	} else if (operatorIndex === 2) {	
	result = multiply(num1, num2);
    } else {	                                
	result = divide(num1, num2);
	}
	console.log("The result is: " + result)		

/*########################################## Node Calculator Story Point 41 ##########################################*/
/*################################################### With Notes #####################################################*/
/*################################################## Instructions ####################################################*/
//  Used to import and make available the "readline-sync"module in my Node.js script. This allows me to               //
//  create interactive command-line programs that take user input and provide output synchronously.The require        //
//  function is used to import the module, and I store its functionality in the readlineSync constant.*/              //
/**********************************************************************************************************************/

//-DONE- Each function will have 2 parameters, `num1`, `num2`
const readlineSync = require("readline-sync");
//-DONE- *Please enter your first number* (store that number)
const num1 = +readlineSync.question("Please enter your first number. ");	
//-DONE- *Please enter your second number* (store that number)															 
const num2 = +readlineSync.question("Please enter your second number. ");	

//*NOTE the + operator before readlineSync.question(...)
//is a concise way to ensure that the input stored 
//in num1 and num2 is treated as numeric values.

//-DONE- *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
const operation = ['add', 'sub', 'mul', 'div']	
const operatorIndex = readlineSync.keyInSelect(operation, "What operation to use? ");

let result;
//-DONE- A function that adds two numbers and returns the result
function add(num1, num2) {			
	return num1 + num2;
}
//-DONE- A function that multiplies two numbers and returns the result
function multiply(num1, num2) {		
	return num1 * num2;
}
//-DONE- A function that divides two numbers and returns the result
function divide(num1, num2) {		
	return num1 / num2;
}
//-DONE- A function that subtracts two numbers and returns the result
function subtract(num1, num2) {		
	return num1 - num2;
}
//*NOTE* Using an if statement here to read the value of "operatorIndex"
if (operatorIndex === 0) {				
	result = add(num1, num2); 
	} else if (operatorIndex === 1) {
	result = subtract(num1, num2);
	} else if (operatorIndex === 2) {	
	result = multiply(num1, num2);
    } else {	                                
	result = divide(num1, num2);
	}
//-DONE- Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
	console.log("The result is: " + result)		
//-DONE- You will then print to the console: *The result is: [the result]*
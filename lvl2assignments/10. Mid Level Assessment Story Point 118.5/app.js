Introduction:

//  This is a moment for you to test your coding skills and prepare yourself for an interview. 
//  Below you will see two code challenges for you to complete. You will also need to add comments 
//  to your code in order to describe your process and solution. Next you will complete a quiz 
//  that will test the knowledge you have gained so far. Once you have completed the challenges and quiz, 
//  schedule an assessment to review with an instructor and do a third coding challenge live! 

//  Challenge 1: Sorting an Array ================================================================================>

//  ***Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.***

function sortNumbers(numbers) {
//your code here
    return numbers.sort((a, b) => a - b) 
//      return "numbers" = main function parameter, 
//      sort() to sort array, 
//      "a" and "b" = parameters, 
//      "=>" syntax for 'function', 
//      "a - b" sorts ascending,  
}

// Example usage:
// const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  
// Output: [1, 2, 4, 5, 7, 9]


//  Challenge 2: Mapping an Array ================================================================================>

//  ***Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.***

function convertToUppercase(strings) {
// your code here
return strings.map(function(string) {
    return string.toUpperCase();
//      return strings = accessing the strings array and return the function result
//      map(function(string) = iterates over each element of strings and applies the function "string"
//      return string.toUpperCase() = returns the function "string" and applies the toUpperCase() function to it

})
}

// Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  
// Output: ['HELLO', 'WORLD', 'JAVASCRIPT']


//Write a function that takes an array of numbers and returns a new array containing only the even numbers.'
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0)     
    }        

console.log(filterEvenNumbers(numbers));  // Output: [2, 4, 6]
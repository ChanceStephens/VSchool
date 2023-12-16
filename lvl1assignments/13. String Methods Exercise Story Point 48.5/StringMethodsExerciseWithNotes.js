
/*################################################# String Methods Exercise - Story Point 53#################################################*/
/*############################################################# With Notes ##################################################################*/
/*********************************************************************************************************************************************/
/*___________________________________________________________________________________________________________________________________________*/

/********************************************************************Exercise 1**************************************************************/           
/*1. Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.*/

//capitalizeAndLowercase("HelLo") // => "HELLOhello"
/*___________________________________________________________________________________________________________________________________________*/
/******************************************************************THE FUNCTION**************************************************************/           

function capitalizeAndLowercase(input) {                                    //You call the capitalizeAndLowercase function.
        const capitalize = input.toUpperCase();                               //You create a capitalize variable that contains the uppercase version of the hello string.
        //console.log(capitalize);                                          
        const lowercase = input.toLowerCase();                                // You create a lowercase variable that contains the lowercase version of the hello string.
        //console.log(lowercase);                                           
        const combine = ('"' + capitalize.concat(lowercase).toString() +'"'); //You create a combine variable by concatenating the capitalize and lowercase strings and 
//                                                                              then converting the result to a string using .toString() and enclosing the result in 
//                                                                              double quotes to give the final result asked for. 
//                                                                          **Note**- removing the variable from the enclosed double quotes logs HELLOhello.                                            
    return combine;                                                         //The function returns the combined string.
}
console.log(capitalizeAndLowercase("HelLo"));                               //Finally, you log to the console.
/*___________________________________________________________________________________________________________________________________________*/
/**********************************************************************RESULT****************************************************************/
    // [Running] node "/home/chance/lvl1Vschool/lvl1assignments/13. String Methods Exercise/tempCodeRunnerFile.js"
    // "HELLOhello"
    
    // [Done] exited with code=0 in 0.037 seconds
/*___________________________________________________________________________________________________________________________________________*/
/********************************************************************Exercise 2**************************************************************/ 
    /*2. Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
Hint: You'll need to use Math.floor().*/

// findMiddleIndex("Hello") // =//> 2
// findMiddleIndex("Hello World") // => 5
/*___________________________________________________________________________________________________________________________________________*/
/******************************************************************THE FUNCTION**************************************************************/
function findMiddleIndex(input) {                       //You define a function that calculates and returns the middle index of the provided input string.
    const middleIndex = Math.floor((input.length - 1)/2); //calculate the middle index by using the formula Math.floor((input.length - 1) / 2). 
//                                                        This formula finds the middle index based on the length of the input string. 
//                                                        The result is stored in the middleIndex variable.
    return middleIndex;                                 //The function returns the middleIndex as its result using the return statement
   }
    console.log(findMiddleIndex("Hello"));              //Finally, you log to the console the result of calling the function with the argument "Hello."
    console.log(findMiddleIndex("Hello World"));        //Finally, you log to the console the result of calling the function with the argument "Hello World."
/*___________________________________________________________________________________________________________________________________________*/
/**********************************************************************RESULT****************************************************************/
// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/13. String Methods Exercise/tempCodeRunnerFile.js"
// "HELLOhello"
// 2
// 5

// [Done] exited with code=0 in 0.033 seconds
/*___________________________________________________________________________________________________________________________________________*/
/********************************************************************Exercise 3**************************************************************/ 
    /*3. Write a function that uses `[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)` 
    and the other functions you've written to return the first half of the given string.*/

//returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"

//question1Result(),findMiddleIndex(), question1Result,question2Result1, question2Result2
//const middleIndex = Math.floor((input.length - 1)/2);
/*___________________________________________________________________________________________________________________________________________*/
/******************************************************************THE FUNCTION**************************************************************/
function returnFirstHalf(input) {               // Define the returnFirstHalf function.
    const getHalf = findMiddleIndex(input);       // Call the findMiddleIndex function to get the middle index.
    const firstHalf = input.slice(0, getHalf);    // Use slice to get the first half of the input string.
    return firstHalf                            // Return the first half.
}
console.log(returnFirstHalf("Hello"));          // Log the result of calling the function with "Hello" to the console.
console.log(returnFirstHalf("Hello World"));    // Log the result of calling the function with "Hello World" to the console. 
/*___________________________________________________________________________________________________________________________________________*/
/**********************************************************************RESULT****************************************************************/
// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/13. String Methods Exercise Story Point 48.5/tempCodeRunnerFile.js"

// He
// Hello

// [Done] exited with code=0 in 0.034 seconds
/*___________________________________________________________________________________________________________________________________________*/
/********************************************************************Exercise 4**************************************************************/ 
    /*4. Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
Hint: If your string length is odd, use Math.floor() to round down.*/

//capitalizeAndLowercase("Hello") // => "HEllo"
//capitalizeAndLowercase("Hello World") // => "HELLO world"
/*___________________________________________________________________________________________________________________________________________*/
/******************************************************************THE FUNCTION**************************************************************/

// Define a function 'halfCapHalfLow' that takes an 'input' string.
function halfCapHalfLow(input) {
    // Find the middle index of the input string.
    const middleIndex = findMiddleIndex(input);

    // Get the first half of the input string.
    const getFirstHalf = input.slice(0, middleIndex);

    // Get the second half of the input string.
    const getSecondHalf = input.slice(middleIndex);

    // Convert the first half to uppercase.
    const capFirstHalf = getFirstHalf.toUpperCase();

    // Convert the second half to lowercase.
    const lowSecondHalf = getSecondHalf.toLowerCase();

    // Concatenate the uppercase and lowercase halves and enclose in double quotes.
    const finalize = ('"' + capFirstHalf.concat(lowSecondHalf) + '"');

    // Return the final result.
    return finalize;
}

// Test the 'halfCapHalfLow' function with different input strings and log the results.
console.log(halfCapHalfLow("Hello"));
console.log(halfCapHalfLow("Hello World"));
/**********************************************************************RESULT****************************************************************/
// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/13. String Methods Exercise/tempCodeRunnerFile.javascript"
// "HELLOhello"
// 2
// 5
// He
// Hello
// "HEllo"
// "HELLO world"

// [Done] exited with code=0 in 0.039 seconds
/*___________________________________________________________________________________________________________________________________________*/
/********************************************************************Exercise 5**************************************************************/
    /***Optional Code Challenge**

5. Write a function that takes a string as a parameter and capitalizes any character that follows a space.
(This one is a step up in difficulty and utilizes the .split() string method and .join() array method):*/

// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"

//split()	Splits a string into an array of substrings
//join()	Joins all elements of an array into a string
/*___________________________________________________________________________________________________________________________________________*/
/******************************************************************THE FUNCTION**************************************************************/
function capFirstLetters(input) {                                           
    const splitString = input.split(' ')                      // Split the input string into an array of words using a space as the delimiter.
    const newArray = [];                                      // Create an empty array to store the modified words.
    for (const i = 0; i < splitString.length; i++) {          // Iterate through each word in the splitString array.
        const firstLetter = splitString[i][0].toUpperCase();  // Get the first letter of the current word and capitalize it.
        const restOfWord = splitString[i].slice(1);           // Get the rest of the word (excluding the first letter).
    newArray.push(firstLetter + restOfWord);                // Combine the capitalized first letter and the rest of the word, then push it to the newArray.
    }
    const finalString = newArray.join(" ");                   // Join the modified words into a single string with spaces between them.
    return finalString;
}
console.log(capFirstLetters("Hey Friends! Practice Practice Practice!"));// Call the capFirstLetters function with a sample input and log the result.
/*___________________________________________________________________________________________________________________________________________*/
/**********************************************************************RESULT****************************************************************/

// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/13. String Methods Exercise/tempCodeRunnerFile.js"
// Hey Friends! Practice Practice Practice!

// [Done] exited with code=0 in 0.036 seconds
// 
/*___________________________________________________________________________________________________________________________________________*/
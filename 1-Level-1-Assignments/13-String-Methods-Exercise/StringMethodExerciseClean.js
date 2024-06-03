
/*################################################# String Methods Exercise - Story Point 53#################################################*/
/*############################################################# With Notes ##################################################################*/
/*********************************************************************************************************************************************/
/*___________________________________________________________________________________________________________________________________________*/

/********************************************************************Exercise 1**************************************************************/           
/*1. Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.*/

//capitalizeAndLowercase("HelLo") // => "HELLOhello"
/*___________________________________________________________________________________________________________________________________________*/
/******************************************************************THE FUNCTION**************************************************************/           

function capitalizeAndLowercase(input) {                                    
        const capitalize = input.toUpperCase();                               
        //console.log(capitalize);                                          
        const lowercase = input.toLowerCase();                                
        //console.log(lowercase);                                           
        const combine = ('"' + capitalize.concat(lowercase).toString() +'"');                                                                                                                    
    return combine;                                                         
}
console.log(capitalizeAndLowercase("HelLo"));                               
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
function findMiddleIndex(input) {                       
    const middleIndex = Math.floor((input.length - 1)/2);                                                         
    return middleIndex;                             
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
function returnFirstHalf(input) {               
    const getHalf = findMiddleIndex(input);     
    const firstHalf = input.slice(0, getHalf);  
    return firstHalf                            
}
console.log(returnFirstHalf("Hello"));          
console.log(returnFirstHalf("Hello World"));     
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
function halfCapHalfLow(input) {
    const middleIndex = findMiddleIndex(input);                  
    const getFirstHalf = input.slice(0, middleIndex);
    const getSecondHalf = input.slice(middleIndex);
    const capFirstHalf =  getFirstHalf.toUpperCase();
    const lowSecondHalf = getSecondHalf.toLowerCase();
    const finalize = ('"' + capFirstHalf.concat(lowSecondHalf) + '"');
    return finalize         
}
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
    const splitString = input.split(' ')                      
    const newArray = [];                                    
    for (let i = 0; i < splitString.length; i++) {         
        const firstLetter = splitString[i][0].toUpperCase();  
        const restOfWord = splitString[i].slice(1);           
    newArray.push(firstLetter + restOfWord);                
    }
    const finalString = newArray.join(" ");                   
    return finalString;
}
console.log(capFirstLetters("Hey Friends! Practice Practice Practice!"));
/*___________________________________________________________________________________________________________________________________________*/
/**********************************************************************RESULT****************************************************************/

// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/13. String Methods Exercise/tempCodeRunnerFile.js"
// Hey Friends! Practice Practice Practice!

// [Done] exited with code=0 in 0.036 seconds
// 
/*___________________________________________________________________________________________________________________________________________*/
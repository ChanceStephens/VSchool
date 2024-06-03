//=====|Mid Level 5 Quiz Results|=====//
/* https://docs.google.com/forms/d/e/1FAIpQLSeHQYGM7anXYKeV3MdM9QADemKfM-57WYKohx51MiiyEA8g9A/viewscore?viewscore=AE0zAgBSFdVk78fRXzYCihOcEHJO4ZgIb8w09KThlravc2qNiNJttkObdc3H8yGtDA */
//====================================//


//# Code Challenges:

//### **Extract Unique Characters:**

//  Write a function called **`extractUniqueCharacters`** that takes an array of strings 
//  and returns a new array containing only the unique characters from all the strings.


function extractUniqueCharacters(strings) {
// combine all strings(words) into 1 long string(of letters), then split the string of 
// letters into individual strings
    const joinStrings = strings.join('').split('')
// taking the result of the above code, you filter the array checking the letter and 
// index of each one. indexOf takes the first index where a letter can be found in the array.
// === index compares the index of current letters with the 'index' parameter.  Basically 
// It checks if the current index is equal to the index of the first occurrence of the letter
// in the array. If they are equal, it means the current letter is the first occurrence of 
// that character in the array.
    const uniqueLetters = joinStrings.filter((letter, index) => joinStrings.indexOf(letter) === index)
    return uniqueLetters
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

//  ### **Sort by Property:**

// Write a function called **`sortByProperty`** that takes an array of objects and a 
// property name as input. The function should return a new array containing the 
// objects sorted in ascending order based on the specified property.

function sortByProperty(objects, propertyName) {
// Use the sort method to sort the objects array
    objects.sort((a, b) => {
// Access the property dynamically using square brackets
// This makes sure we're accessing the property specified by the propertyName
        return a[propertyName] - b[propertyName];
      });
      return objects;
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);


//Challenge: Write a program that generates a multiplication table for a given number.

//The table should display the multiplication of the given number with numbers from 1 to 10.

function generateMultiplicationTable(number) {
  for (let i = 1; i < 11; i++) {
    const value = number * [i]
    console.log(`${value}`)
  }
}

// Test the function with different numbers
generateMultiplicationTable(5)
// Expected Outcome: 
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50 
*/
generateMultiplicationTable(7);
generateMultiplicationTable(3);
// Use the built-in `.sort()` method on arrays to solve these problems.

// Feel free to copy and paste the function and tests in this assignment.

//  1) Sort an array from smallest number to largest**


function leastToGreatest(arr) {
  return arr.sort((a, b) => a - b)
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

//=================================================================================================================>

//  2) Sort an array from largest number to smallest**

// function greatestToLeast(arr) {
//   return arr.sort((a, b) => b - a);
// }

const greatestToLeast = (arr) => arr.sort((a, b) => b - a);

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

//=================================================================================================================>

//  3) Sort an array from shortest string to longest**


// function lengthSort(arr) {
//   // your code here
// }

const lengthSort = (arr) => arr.sort((a, b) => a.length - b.length);

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

//=================================================================================================================>

//  4) Sort an array alphabetically**


// function alphabetical(arr) {

// }
const alphabetical = (arr) => arr.sort();

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

//=================================================================================================================>

//  5) Sort the objects in the array by age**


// function byAge(arr){
//   // your code here
// }
const byAge = (arr) => arr.sort((a, b) => a.age - b.age)

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]

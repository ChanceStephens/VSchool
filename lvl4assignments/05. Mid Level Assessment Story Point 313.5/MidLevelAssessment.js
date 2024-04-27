/*## Filter Anagrams

Write a function called **`filterAnagrams`** that filters an array of words to find and 
return an array containing only the words that are anagrams of a given target word.

**Understand the Problem:**
Before you start coding, make sure you understand what the challenge is asking. You need 
to filter a given array of words to find the anagrams of a target word. Anagrams are 
words that have the same letters but in a different order.*/

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

function filterAnagrams(arr, target) {
  //split target into an array of single letters and then sort the array of letters alphabettically
  //this will allow me to check to see if both elements have all the matching letters
  const splitAndSortTarget = target.split('').sort()  
  //using the filter method, i now iterate over the array...
  const filterWords = arr.filter(word => {
    //allowing me to split and sort each word just like the target
    const splitAndSortWord = word.split('').sort()
    //now that both target and arr have been split and sorted, i can check if they strictly equal each other
    return splitAndSortWord.join('') === splitAndSortTarget.join('')
  })
  //i return the filterWords variable...  This will provide all the words that are anagrams
  return filterWords
}
const anagrams = filterAnagrams(words, target);

console.log(anagrams); // Output: ['listen', 'silent']
/*
[Running] node "/home/chance/VSchool/lvl4assignments/05. Mid Level Assessment Story Point 313.5/tempCodeRunnerFile.js"

[ 'listen', 'silent' ]

[Done] exited with code=0 in 0.047 seconds
*/

/*======================================================================*/

/*## **Sort by Multiple Criteria**

Write a function called **`sortByMultipleCriteria`** that takes an array of objects 
representing people, each with a **`name`** (string) and **`age`** (number) property. 
The function should return a new array with the people sorted first by age in ascending 
order, and then by name in alphabetical order.*/

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];


function sortByMultipleCriteria(people) {
  //First, sort the age in ascending order.
  return people.sort((a, b) => {
    //use a and b . age accesses objects age propert. If they do not equal each other...
    if (a.age !== b.age) {
      //we return age sorted in ascending order
      return a.age - b.age
    } else {
      //if the ages are equal or "the same" we use the localeCompare method to compare 
      //the two strings and sortsthose strings alphabetically.
      return a.name.localeCompare(b.name)
    }
  })
}

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]
/*[Running] node "/home/chance/VSchool/lvl4assignments/05. Mid Level Assessment Story Point 313.5/tempCodeRunnerFile.js"
[
  { name: 'Bob', age: 25 },
  { name: 'David', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Charlie', age: 35 }
]

[Done] exited with code=0 in 0.056 seconds*/




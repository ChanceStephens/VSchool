/*
 Code Challenges

 Challenge 1: Sort Array with Preserved Index for -1 Values**

You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

All non -1 values in the array should be sorted in ascending order.
The -1 values should retain their original index positions in the sorted array.
*/

function solution(arr) {
    // let filteredArray = arr.filter(function(num) {
    //     return num !== -1;
    // })
    let filteredArray = arr.filter(num => num !== -1)

    // filteredArray.sort(function(a, b) {
    //     return a - b
    // })

    filteredArray.sort((a, b) => a - b)

    return arr.map(num => {
        if (num === -1) {
            return -1;
        } else {
            return filteredArray.shift()
        }
    })

    // return arr.map(function(num) {
    //      if (num === -1) {
    //         return -1;
    //     } else {
    //         return filteredArray.shift()
    //     }
    // })
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))


// /* 
// ### Challenge 2: **Count Vowels**

// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.
// */


const input1 = 'Hello, World!';
const input2 = 'Counting Vowels';

function countVowels(input) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const toArray = input.toLowerCase().split('')
    return toArray.reduce(function (count, character) {
        if (vowels.includes(character)) {
            return count + 1;
        } else {
            return count;
        }
    }, 0)
};

console.log(countVowels(input1)); // Output: 3

console.log(countVowels(input2)); // Output: 5
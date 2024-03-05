/*
 Code Challenges

 Challenge 1: Sort Array with Preserved Index for -1 Values**

You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

All non -1 values in the array should be sorted in ascending order.
The -1 values should retain their original index positions in the sorted array.
*/

function solution(arr){
//  Filter out -1 from the input array and store the result in filteredArray.
    let filteredArray = arr.filter(function(num) {
//  Return only the positive numbers
        return num !== -1;
    })

    // console.log(filteredArray); //  OUTPUT: [ 150, 190, 170, 160, 180 ]
//  Sort the filteredArray in ascending order
    filteredArray.sort(function(a, b) {
        return a - b
    })
    // console.log(filteredArray);//   OUTPUT: [ 150, 160, 170, 180, 190 ]
//  Use map() to iterate through the original array
    return arr.map(function(num) {
//      if the number is strictly -1, 
        if (num === -1) {
//      then replace it with a -1            
            return -1;
        } else {
//      If the number is not -1 it is replaced with the smallest number from filteredArray
            return filteredArray.shift()
        }
    })
}
// OUTPUT FINAL RESULT:     [-1, 150, 160, 170, -1,  -1, 180, 190]

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
//  Create the function "countVowels()" with a parameter of "input"
    function countVowels(input) {
//      Create a variable of vowels that are strings, inside an array.
        const vowels = ['a', 'e', 'i', 'o', 'u']
//      Create a variable "toArray" that will hold the parameter after it has be changed to all lowercase and split apart into strings
        const toArray = input.toLowerCase().split('')
//      The reduce() method is applied to "toArray" using count and character as parameters
        return toArray.reduce(function(count, character) {
//      The if statement will check to see if the character of the string is included in the "vowels" array. If the current character is a vowel, the if condition returns true
        if (vowels.includes(character)) {
//      If the condition returns true, we increase the count by 1
        return count + 1;
        } else {
//          If the condition returns false, we leave count unchanged
            return count;
        }
//      Set initial value for the "count" to 0
    }, 0)
    };
//      Thus, returning any string placed in the function, its vowel count.
console.log(countVowels(input1)); // Output: 3

console.log(countVowels(input2)); // Output: 5

// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

// function findSumOfTwo(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 return [numbers[i], numbers[j]];
//             } 
            
//         }
//     }
//     return []
// }

// console.log(findSumOfTwo([2, 4, 7, 11, 15], 91)); // Output: [2, 7]

// console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]

function findSumOfTwo(numbers, target) {
    const result = [];
    
    numbers.forEach((num, index) => {
        if(result.length !== 2){
            const complement = target - num;
            const splicedArr = numbers.slice(index + 1)
            console.log(splicedArr, complement)
            if (splicedArr.includes(complement)) {
                result.push(num, complement);
                return;
            } 
        }
    });
    return result;
}

console.log(findSumOfTwo([2, 1, 8, 7, 11, 15], 9)); // Output: []
console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]
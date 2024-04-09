/*==|Problem: Write a function called findMaxNumber that takes an array 
     of numbers as input and returns the maximum number from the array.|==*/

function findMaxNumber(nums) {
    nums.sort((a, b) => b - a)
    return nums[0]
}

console.log(findMaxNumber([1, 6, 3, 9, 2])); // Expected output: 9
console.log(findMaxNumber([-5, -2, -9, -3])); // Expected output: -2
console.log(findMaxNumber([10, 5, 15, 20])); // Expected output: 20
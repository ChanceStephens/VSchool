const fizzArray = [];

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        fizzArray.push("FizzBuzz");
    } else if (i % 3 === 0) { // Check if the number is divisible by 3
        fizzArray.push("Fizz");
    } else if (i % 5 === 0) { // Check if the number is divisible by 5
        fizzArray.push("Buzz");
    } else { // If none of the above conditions are met, push the number itself
        fizzArray.push(i);
    }
}; 

// Print the array with the updated pushes
// console.log(fizzArray);

let objectFizzBuzz = fizzArray.reduce((accumulator, currentValue) => {
    // Check if the current value is "Fizz"
    if (currentValue === "Fizz") {
        // Increment the Fizz count in the accumulator
        accumulator.Fizz = (accumulator.Fizz || 0) + 1;
    } else if (currentValue === "Buzz") { // Check if the current value is "Buzz"
        // Increment the Buzz count in the accumulator
        accumulator.Buzz = (accumulator.Buzz || 0) + 1;
    } else if (currentValue === "FizzBuzz") { // Check if the current value is "FizzBuzz"
        // Increment the FizzBuzz count in the accumulator
        accumulator.FizzBuzz = (accumulator.FizzBuzz || 0) + 1;
    }
    // Return the updated accumulator
    return accumulator;
}, {});

// Print the object that tallies each occurrence of Fizz, Buzz, and FizzBuzz
console.log(objectFizzBuzz);

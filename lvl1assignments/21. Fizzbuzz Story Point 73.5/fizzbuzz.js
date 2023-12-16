

const fizzArray = [];

for (let i = 1; i <= 100; i++) {
//  console.log(i); //=============> Prints 1 to 100
   
    if ( i % 3 === 0 && i % 5 === 0) {
        fizzArray.push("FizzBuzz");
    } else if ( i % 3 === 0) {
        fizzArray.push("Fizz")
    } else if ( i % 5 === 0) {
        fizzArray.push("Buzz")
    } else {
        fizzArray.push(i)
    }
}; 
// console.log(fizzArray); //=============> Returns the Array with the Updated pushes
/*======================= FINAL OUTPUT ===============
[
    1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
    7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
    13,     14,     'FizzBuzz', 16,     17,     'Fizz',
    19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
    'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
    31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
    37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
    43,     44,     'FizzBuzz', 46,     47,     'Fizz',
    49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
    'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
    61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
    67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
    73,     74,     'FizzBuzz', 76,     77,     'Fizz',
    79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
    'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
    91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
    97,     98,     'Fizz',     'Buzz'
  ]
*/


let objectFizzBuzz = fizzArray.reduce((accumulator,currentValue) => {
    if (currentValue ===  "Fizz") {
        accumulator.Fizz = (accumulator.Fizz || 0) + 1;
    } else if (currentValue === "Buzz") {
        accumulator.Buzz = (accumulator.Buzz || 0) + 1;
    } else if (currentValue === "FizzBuzz") {
        accumulator.FizzBuzz = (accumulator.FizzBuzz || 0) + 1;
    }
    return accumulator;
}, {});
console.log(objectFizzBuzz);  //=============> Returns an Object that tallies each occurrance of Fizz, Buzz, and FizzBuzz.




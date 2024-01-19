// 1) Sort an array from smallest number to largest
function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]
  
  // ES6 version
  const leastToGreatestES6 = arr => arr.sort((a, b) => a - b);
  console.log(leastToGreatestES6([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]
  //=================================================================================================================>
  
  // 2) Sort from largest number to smallest
  function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]
  
  // ES6 version
  const greatestToLeastES6 = arr => arr.sort((a, b) => b - a);
  console.log(greatestToLeastES6([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]
  //=================================================================================================================>
  
  // 3) Sort from shortest string to longest
  function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]
  
  // ES6 version
  const lengthSortES6 = arr => arr.sort((a, b) => a.length - b.length);
  console.log(lengthSortES6(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]
  //=================================================================================================================>
  
  // 4) Sort alphabetically
  function alphabetical(arr) {
    return arr.sort();
  }
  
  console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]
  
  // ES6 version
  const alphabeticalES6 = arr => arr.sort();
  console.log(alphabeticalES6(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]
  //=================================================================================================================>
  
  // 5) Sort objects in the array by age
  function byAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
  }
  
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
  
  // ES6 version
  const byAgeES6 = arr => arr.sort((a, b) => a.age - b.age);
  console.log(byAgeES6([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]
  
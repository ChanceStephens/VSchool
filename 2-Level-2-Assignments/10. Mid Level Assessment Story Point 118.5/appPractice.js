//      1) Make an array of numbers that are doubles of the first array**
/* ES 5 ----->*/
function doubleNumbers(arr){
    return arr.map(function(num) {
        return num * 2;
    })
}

/* ES 6 ----->*/
const doubleNumbers = arr => arr.map(num => num * 2);

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
//=====================================================================================================================================================>
//      2) Take an array of numbers and make them strings**

/* ES 5 ----->*/
function stringItUp(arr){
  return arr.map(function(string){
    return string.toString();
  })
}
/* ES 6 ----->*/
const stringItUp = arr => arr.map(string => string.toString())
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
//=====================================================================================================================================================>
//      3) Capitalize the first letter of each name and make the rest of the characters lowercase**
/* ES 5 ----->*/
function capitalizeNames(arr){
  return arr.map(function(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  })
}
/* ES 6 ----->*/
const capitalizeNames = arr => arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
//=====================================================================================================================================================>
//      4) Make an array of strings of the names**
/* ES 5 ----->*/
function namesOnly(arr){
  return arr.map(function(person){
    return person.name;
  })
}
/* ES 6 ----->*/
const namesOnly = arr => arr.map(person => person.name)
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
//=====================================================================================================================================================>
//      5) Make an array of strings of the names saying whether or not they can go to The Matrix**
/* ES 5 ----->*/
function makeStrings(arr){  
    return arr.map(function(person){
        if (person.age < 18) {
            return person.name + " can go to The Matrix";
  } else {
    return person.name + " is underage!!"
  }})
}
/* ES 6 ----->*/
const makeStrings = arr => arr.map(person => { 
    if (person.age < 18) {
        return person.name + " can go to The Matrix"
    } else {
        return person.name + " is underage!!"
    }})
console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
//=====================================================================================================================================================>
//      6) Make an array of the names in `h1`s, and the ages in `h2`s**
/* ES 5 ----->*/
function readyToPutInTheDOM(arr){
  return arr.map(function(person){
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`
  })
}
const readyToPutInTheDOM = arr => arr.map(person => `<h1>${person.name}</h1><h2>${person.age}<h2>`)

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
//=====================================================================================================================================================>
//      1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.**
/* ES 5 ----->*/
function fiveAndGreaterOnly(arr) {
  return arr.filter(function(num) {
    return num >= 5;
  })
  }
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
//=====================================================================================================================================================>
//      2) Given an array of numbers, return a new array that only includes the even numbers.**
/* ES 5 ----->*/
function evensOnly(arr) {
  return arr.filter(function(num) {
    return num % 2 === 0;
  })
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
//=====================================================================================================================================================>
//      3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length**
/* ES 5 ----->*/
function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(function(item){
    return item.length <= 5;
  })
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
//=====================================================================================================================================================>
//      4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.**
/* ES 5 ----->*/
function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(function(person){
    return person.member === true
  })
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]
//=====================================================================================================================================================>
//      5) Make a filtered list of all the people who are old enough to see *The Matrix* (older than 18)**
/* ES 5 ----->*/
function ofAge(arr){
  
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
//=====================================================================================================================================================>
//      1) Turn an array of numbers into a total of all the numbers**
/* ES 5 ----->*/
function total(arr) {
   return arr.reduce(function(final, num){
    return final + num
   }, 0)
}

console.log(total([1,2,3])); // 6
//=====================================================================================================================================================>
//      2) Turn an array of numbers into a long string of all those numbers.**
/* ES 5 ----->*/
function stringConcat(arr) {
   return arr.reduce(function(final, num){
    return final + num;
   }, "")
}
console.log(stringConcat([1,2,3])); // "123"
//=====================================================================================================================================================>
//      3) Turn an array of voter objects into a count of how many people voted**
/* ES 5 ----->*/
function totalVotes(arr) {
   return arr.reduce(function(final, person){
    if (person.voted === true) {
        return final + 1
    } else {
        return final
    }
   }, 0)

}
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7
//=====================================================================================================================================================>
//      **Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
//      4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once**
/* ES 5 ----->*/
function shoppingSpree(arr) {
   
}
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist)); // 227005
//=====================================================================================================================================================>
//      5) Given an array of arrays, flatten them into a single array**
/* ES 5 ----->*/
function flatten(arr) {
   
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
//=====================================================================================================================================================>
//      **Note: Take a look at Array.concat() to help with this one
//      6) Given an array of potential voters, return an object representing the results of the vote**
//      Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
//      and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
/* ES 5 ----->*/
function voterResults(arr) {
   
}
console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
//=====================================================================================================================================================>
//      You should use multiple array methods to solve these problems. Don't use `for` loops!
/* ES 5 ----->*///      Using the provided `peopleArray` (bottom of this article), write a function that:

//      1. Returns a list of everyone older than 18, which is
//      2. sorted alphabetically by last name, and where
//      3. each name and age is embedded in a string that looks like an HTML `<li>` element.
//      Example**
/* ES 5 ----->*/
function sortedOfAge(arr){
   
}
console.log(sortedOfAge(peopleArray));
/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/
//=====================================================================================================================================================>
//      **Extra Credit**

//      - Create another array of one or more individuals and add it to the original array.
/* ES 5 ----->*///      
//  - Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
//      - Remove the second individual from the array.
//      - Return the array in reverse order.
//      Provided Array**
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
//=====================================================================================================================================================>
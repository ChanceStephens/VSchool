const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const result = movies.filter(name => name.genre === "action")
console.log(result)

//===========================================================================================================================>


// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const fiveAndGreaterOnly = (arr) => arr.filter(num => num > 4)
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//===========================================================================================================================>


// 2) Given an array of numbers, return a new array that only includes the even numbers.
const evensOnly = (arr) => arr.filter(num => num % 2 === 0)
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//===========================================================================================================================>


// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
const fiveCharactersOrFewerOnly = (arr) => arr.filter(item => item.length < 6)
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//===========================================================================================================================>


// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const peopleWhoBelongToTheIlluminati = (arr) => arr.filter(people => people.member === true)
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

//===========================================================================================================================>


// 5) Make a filtered list of all the people who are old enough to see *The Matrix* (older than 18).
const ofAge = (arr) => arr.filter(name => name.age > 18)
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

//===========================================================================================================================> 

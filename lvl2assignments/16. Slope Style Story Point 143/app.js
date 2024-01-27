// Use your mid level assessment to go over this and the previous assignment if you’d like to know if it’s ES6y enough!

// Each problem is marked using Ski Slope difficulty ratings. Become a double black diamond ES6 writer!

// # **Rest and Spread Operator**

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:


function collectAnimals(...animals) {
    return [...animals];
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:


function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))


    // {fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]}



// - Hint
    
//     { item } is shorthand for { item: item }

// Use destructuring to use the property names as variables. Destructure the object in the parameter:


function parseSentence({location, duration}) {
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}));


// - Hint
//     - This function is expecting two variables to be defined in the parameter list.
        
//         You can destructure in the parameter list
        
        // - `const { location, duration } = vacation` is an example of destructuring, but wouldn't complete this task.
        //     - `function parseSentence({ _____ , ______ }){`
        //         - the order of location and duration don't matter. You'll be saying, "I'm expecting ONE object. And I'd like to use these properties like variables pointing to the corresponding property values of that object."



// Use array destructuring to make this code ES6:

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}



//      const [varIMakeUpRightHereForTheFirstItemInTheArray] = arr`
// does the same thing as:
//      const varIMakeUpRightHereForTheFirstItemInTheArray = arr[0]`
    
    
// - more cool syntax (not real relevant to the question though)
    
    
    const arr = ["important", "skip", "important"]
    const [nameFirstItemHere, blankSpace , nameThirdItemHere] = arr
    
    
//     This syntax names our first and our third variable. How would we name our second? The one at index 1? We'd make up a name between the commas. 
    

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.


function combineAnimals(...animals) {
    return [...animals];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]






// Try to make the following function more ES6y:


function product(a, b, c, d, e) {
  let numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
const product = (...numbers) => numbers.reduce((final, num) => final * num, 1)


// Make the following function more ES6y. Use at least both the rest and spread operators:


function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

const unshift = (array, ...elements) => [...elements, ...array];




// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:


function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}
const populatePeople = (names) => names.map((name) => {
    const [firstName, lastName] = name.split(" ");
    return { firstName, lastName };
}) 
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

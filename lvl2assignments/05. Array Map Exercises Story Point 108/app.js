
// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
  return arr.map(function(number) {
    return number * 2;
  })
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

​//================================================================================================================================================>
// 2) Take an array of numbers and make them strings

function stringItUp(arr){
  return arr.map(function(item) {
    return item.toString();
  });
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

​//================================================================================================================================================>
// 3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr){
  return arr.map(function(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();   
  })

}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

​//================================================================================================================================================>
// 4) Make an array of strings of the names

function namesOnly(arr){
  return arr.map(function(name) {
    return name.name
  })
}

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

​//================================================================================================================================================>
// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
    return arr.map(function(name) {
        if (name.age < 18) {
            return `${name.name} is underage!!`
        } else {
            return `${name.name} can go to the Matrix`
        }
    })
}

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

​//================================================================================================================================================>
// 6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
  return arr.map(function(name) {
    return `<h1>${name.name}</h1>` + `<h2>${name.age}</h2>`;
  })
  }
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

//================================================================================================================================================>


/*################################################ Loop Olympics Story Point 42 ################################################*/
/*############################################################Clean ############################################################*/
/********************************************************************************************************************************/
/*______________________________________________________________________________________________________________________________*/

/********************************************************* Instructions**********************************************************/
//  For this exercise you are only required to complete the Preliminary and Bronze medal portions.                              //
//  Once you have completed these two portions you are allowed to move on in the curriculum.                                    //
//  This exercise will get progressively more difficult with each challenge. The Silver and                                     //
//  Gold medal portions of this exercise are optional. You are welcome to attempt these additional                              //
//  challenges if you would like to go the extra mile!                                                                          //
/********************************************************************************************************************************/

{/************************************************Preliminaries******************************************************************/
{//         1. Write a for loop that prints to the console the numbers 0 through 9.

for (var i = 0; i <= 9; i++) {      
    console.log(i)
}

{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
0
1
2
3
4
5
6
7
8
9

[Done] exited with code=0 in 0.034 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{//         2. Write a for loop that prints to the console 9 through 0.

for (var i = 9; i >= 0; i--) {      
    console.log(i)
}

{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
9
8
7
6
5
4
3
2
1
0

[Done] exited with code=0 in 0.035 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}  
{//         3. Write a for loop that prints these fruits to the console.`**const fruit = ["banana", "orange", "apple", "kiwi"]**`

var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++) {        
    console.log(fruit[i])                       
/*******************************************************************************************************************************/}
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
banana
orange
apple
kiwi

[Done] exited with code=0 in 0.036 seconds
*/
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{/*************************************************Bronze Medal******************************************************************/
{//         1. Write a for loop that will push the numbers 0 through 9 to an array.

let myArray = [];                               /**Note- must create an empty array in order to run a for loop*/

for (var i = 0; i <= 9; i++) {                  
    myArray.push(i);                            /**Note- using the array name plus "push" method creates an array based on the for loop's parameters*/
}
console.log(myArray);

{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]

[Done] exited with code=0 in 0.041 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{//         2. Write a for loop that prints to the console only even numbers 0 through 100.

for (i = 0; i <=100; i++) {
    if (i % 2 === 0) {                          /**Note- (i % 2 === 0) specifically will return only even index items */
        console.log(i);
    }
}
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
0
2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50
52
54
56
58
60
62
64
66
68
70
72
74
76
78
80
82
84
86
88
90
92
94
96
98
100

[Done] exited with code=0 in 0.035 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{//         3. Write a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const evenFruit = fruit.filter((fruit,i) => [i] % 2 === 0);             /**Note- first you have to seperate out the "even" index items using the method "filter"*/
const oddFruit = fruit.filter((fruit,i) => [i] % 2 !== 0);              /**Note- next, we are seperating out the "odd" index items again using the method "filter"*/

for (var i = 0; i < fruit.length; i++) {
    evenFruit.push[i];                                                  /**Note- This will now push the even index fruits to a new an array*/
    oddFruit.push[i];                                                   /**Note- This will now push the odd index fruits to a new an array*/
}
console.log(evenFruit);
console.log(oddFruit);
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
[ 'banana', 'apple', 'pear' ]
[ 'orange', 'kiwi', 'peach' ]

[Done] exited with code=0 in 0.034 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{/*************************************************Silver Medal******************************************************************/

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah Winfrey",
      occupation: "Entertainer"
    }
  ];
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  
{//         1. Write a loop that will print out all the names of the people of the people array.

for (var i = 0; i < peopleArray.length; i++) {              
   console.log(peopleArray[i].name);                            /**Note- access the name by going through the array, the iterator, then the name*/
}
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
Harrison Ford
Justin Bieber
Vladimir Putin
Oprah Winfrey

[Done] exited with code=0 in 0.034 seconds
/*******************************************************************************************************************************/} 
/*******************************************************************************************************************************/}
{//         2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.

  let famousNames = [];                                                 /**Note- First create an array for each of the results we want*/
  let famousOccupations = [];                                           /**Note- First create an array for each of the results we want*/

  for (var i = 0; i < peopleArray.length; i++) {
  let famousPeople = peopleArray[i];                                    /**Note- Create a variable that reflect the original array and the iterator*/
  famousNames.push(famousPeople.name);                                  /**Note- now simply push the items to a new array by accessing them through dot notation*/
  famousOccupations.push(famousPeople.occupation);                      /**Note- now simply push the items to a new array by accessing them through dot notation*/
}
   console.log(famousNames);
   console.log(famousOccupations);
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"

[ 'Harrison Ford', 'Justin Bieber', 'Vladimir Putin', 'Oprah Winfrey' ]
[ 'Actor', 'Singer', 'Politician', 'Entertainer' ]

[Done] exited with code=0 in 0.034 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{//         3. Write a loop that pushes every other name to an array starting with the first person, 
//      in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

// ** Using code written previously for question #2 to complete question #3.
const evenNames = famousNames.filter((famousNames,i) => [i] % 2 === 0);                     /**Note- Here we use the filter method and function (arrow funtion used here)*/
const evenOccupations = famousOccupations.filter((famousOccupations,i) => [i] % 2 !== 0);   /*      to check all the items in array "famousnames" with an even index to return*/ 
   console.log(evenNames)                                                                   /*      those to its own individual new array names "evenNames". Repeated the step for occupations*/
   console.log(evenOccupations)
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"

[ 'Harrison Ford', 'Vladimir Putin' ]
[ 'Singer', 'Entertainer' ]

[Done] exited with code=0 in 0.035 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{/**************************************************Gold Medal*******************************************************************/

/*****************************************************Nesting********************************************************************/
{//         1.Create an array that mimics a grid like the following using nested for loops:
// 
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// 

let objectArrays = [];                          /**Note- First we create an empty array*/
for (var i = 0; i < 3; i++) {                   /**Note- set up the for loop, but starting at 0 and ending at 2 or less than 3 (same thing)*/
    let nestedArray = [];                       /**Note- Now we must create the empty nested array*/
    for (var j = 0; j < 3; j++) {               /**Note- using a new iterator, create a new for loop to run the nested arrays */
        nestedArray.push(0);                    /**Note- we force "0" into the arrays by placing it at the end of this dot notated line*/
    } 
    objectArrays.push(nestedArray)              /**Note- This simply creates the "array of arrays"*/
}
    console.log(objectArrays);
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

[Done] exited with code=0 in 0.033 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{//         2.Create an array that mimics a grid like the following using nested for loops:
//
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]
//
let matrix = [];
for (var i = 0; i < 3; i++) {
    let subArray = [];
    for (var j = 0; j < 3; j++) {
        subArray.push(i);               /**Note- mirroring the same process as the prior question, now we replace "0" with the "i" iterator*/
    }                                   //      This simply creates 3 arrays, all with its relevant index number
    matrix.push(subArray);
}
    console.log(matrix);

{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
[ [ 0, 0, 0 ], [ 1, 1, 1 ], [ 2, 2, 2 ] ]

[Done] exited with code=0 in 0.035 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{//         3.Create an array that mimics a grid like the following using nested for loops:
//
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]
//
let grid = [];
for (var i = 0; i < 3; i++) {
    let inception = [];
    for (var j = 0; j < 3; j++) {
        inception.push(j);              /**Note- by placing the "j" iterator here, this accesses the "subarray" and counts the index there*/
    } 
    grid.push(inception);
}
    console.log(grid);
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
[ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]

[Done] exited with code=0 in 0.035 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
{//         4.Given a grid like the previous ones, write a nested for loop that would change every number to an x.
//
// var grid = [["x", ...],
//             ["x", ...],
//             ["x",...], ...]
//
let goldMatrix = [];
for (var i = 0; i < 3; i++) {
    let superArray = [];
    for (var j = 0; j < 3; j++) {
        superArray.push("x");           /**Note- Placing the string "x" here will change every number in the Intire array to "x" */
        
    } 
    goldMatrix.push(superArray);
}
    console.log(goldMatrix);
{/*Answer:
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/10. Loop Olympics Story Point 49/tempCodeRunnerFile.js"
[ [ 'x', 'x', 'x' ], [ 'x', 'x', 'x' ], [ 'x', 'x', 'x' ] ]

[Done] exited with code=0 in 0.036 seconds
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}
/*******************************************************************************************************************************/}


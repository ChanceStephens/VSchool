
/*######################################################### Array Methods Exercise #########################################################*/
/*############################################################# With Notes #################################################################*/
/********************************************************************************************************************************************/
/*__________________________________________________________________________________________________________________________________________*/ 
//                                                                                                                                          //
//          Create a new JavaScript file and put these two arrays at the beginning.                                                         // 
//          You will write a single function that performs many operations on them.                                                         //
//                                                                                                                                          //
//          After every command, use console.log() to inspect your arrays.                                                                  //  
//          A good way to do that is to do something like:                                                                                  //                          
//                                                                                                                                          //    
//          console.log("fruit: ", fruit);                                                                                                  // 
//          console.log("vegetables: ", vegetables);                                                                                        //                             
//                                                                                                                                          //
/*__________________________________________________________________________________________________________________________________________*/ 
//                                                                                                                                          //
    var fruit = ["banana", "apple", "orange", "watermelon"];                                                                                //
    var vegetables = ["carrot", "tomato", "pepper", "lettuce"];                                                                             //
/*__________________________________________________________________________________________________________________________________________*/ 
{// 1. Remove the last item from the vegetable array.
var step1 = vegetables.pop();
    console.log(vegetables);
    console.log("vegitable removed : ", step1)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// [ 'carrot', 'tomato', 'pepper' ]
// vegitable removed :  lettuce
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 2. Remove the first item from the fruit array.
var step2 = fruit.shift();
    console.log(fruit)
    console.log("fruit removed: ", step2)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// [ 'apple', 'orange', 'watermelon' ]
// fruit removed:  banana
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 3. Find the index of "orange."
var step3 = fruit.indexOf("orange")
    console.log(fruit)
    console.log("index of orange: ", step3)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// [ 'apple', 'orange', 'watermelon' ]
// index of orange:  1
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 4. Add that number to the end of the fruit array.
    fruit.push(step3);
    console.log(fruit);

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// [ 'apple', 'orange', 'watermelon', 1 ]
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 5. Use the length property to find the length of the vegetable array.
var step5 = vegetables.length
    console.log(vegetables)
    console.log("length of vegetable is: ", step5)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// [ 'carrot', 'tomato', 'pepper' ]
// length of vegetable is: 3
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 6. Add that number to the end of the vegetable array.
    vegetables.push(step5)
    console.log(vegetables)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// [ 'carrot', 'tomato', 'pepper', 3 ]
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
    console.log("the combined array is now: ",food)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// the combined array is now: [ 'apple', 'orange', 'watermelon', 1, 'carrot', 'tomato', 'pepper', 3 ]
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 8. Remove 2 elements from your new array starting at index 4 with one method.
var step8 = food.splice(4,2);
    console.log("items removed: ",step8)
    console.log("new array is: ", food)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// items removed:  [ 'carrot', 'tomato' ]
// new array is:  [ 'apple', 'orange', 'watermelon', 1, 'pepper', 3 ]
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 9. Reverse your array.
    food.reverse();
    console.log("array is reversed: ", food)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// [ 3, 'pepper', 1, 'watermelon', 'orange', 'apple' ]
// array is reversed:  [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
{// 10. Turn the array into a string and return it.
var finalArray = food.join()
    console.log(finalArray)

{/**************************************************************RESULT***********************************************************************/
//     [Running] node "/home/chance/lvl1Vschool/lvl1assignments/11. Array Methods Exercise Story Point 50.5/tempCodeRunnerFile.js"
// 3,pepper,1,watermelon,orange,apple
//     [Done] exited with code=0 in 0.044 seconds*/
/********************************************************************************************************************************************/}
/*__________________________________________________________________________________________________________________________________________*/ 
/********************************************************************************************************************************************/}
//  If you've done everything correctly, the last step should print the following string to the console:
//  3,pepper,1,watermelon,orange,apple
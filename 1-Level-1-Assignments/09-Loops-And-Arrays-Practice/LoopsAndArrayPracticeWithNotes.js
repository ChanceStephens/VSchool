/*################################################ Loops and Arrays Practice Story Point 42 ################################################*/
/*############################################################# With Notes #################################################################*/
/********************************************************************************************************************************************/
/*__________________________________________________________________________________________________________________________________________*/
/*                                                                                                                                          */
/*********** 1. Loop through the following array and count how many "computers" there are. Log the final count: DONE! ***********************/

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]    
var computerCount = 0                               //*Step 1. create a variable reflecting the count value
    for(var i = 0; i < officeItems.length; i++) {   //*Step 2. use a for loop to run through the array
        if (officeItems[i] === "computer") {        //*Step 3. set iterator "strictly equal to" the string "computer"
            computerCount++;                        //*Step 4. use created var and add "++" to increment count each time "computer" is read
        }
    }    
        console.log(computerCount)                  //*Step 5. this will log the count as "4", the number of times computer is read

/******************************************************** OUTPUT ****************************************************************************/
// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/09. Loops and Arrays Practice Story Point 42/tempCodeRunnerFile.js"
// 4
//
// [Done] exited with code=0 in 0.043 seconds
/*__________________________________________________________________________________________________________________________________________*/

/** 2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.*/
/****************************************************************EXTRA CREDIT****************************************************************/ 
/*          1. Log to the console a personalized message like:                                                                              */
/* `Mike is not old enough to see Mad Max`or 'Madeline is old enough to see Mad Max.'                                                       */
/*          2. Check to see if the movie goer is a male or female for an even more personalized message.                                    */
/* `Mike is not old enough to see Mad Max Fury Road, don't let HIM in.` or `Madeline is old enough. SHE'S good to see Mad Max Fury Road.`   */
/*__________________________________________________________________________________________________________________________________________*/

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]
//*Step 1. Create for loop to run through array
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {          
//*Step 2. Create a var to simplify the object var name (optional but easier to read)
    var person = peopleWhoWantToSeeMadMaxFuryRoad[i];                                   
    //*Step 3. Establish the parameters for the statements 
    if (person.age >= 18) { 
//*-- if person's age is greater than or equal to "18" then they " are old enough"
        console.log(person.name + " is old enough.");                                   
    }                                                                                   
//*Step 4. Create another parameter for the Object array
    if (person.age >= 18 && person.name === "Madeline") {    
                                   //*-- using && adds another stipulation to the parameter for the code to follow
        console.log(person.name + " is old enough to see Mad Max.");                    
    };
 //*-- Continue creating the parameters for the rest of the for loop to satisfy the request
    if (person.age >= 18 && person.gender === "female" && person.name === "Madeline") { 
        console.log(person.name + " is old enough. SHE'S good to see Mad Max Fury Road.");
    };
    if (person.age < 18) {
        console.log(person.name + " is not old enough.");
    };
    if (person.age < 18 && person.name === "Mike") {
        console.log(person.name + " is not old enough to see Mad Max");
    };
    if (person.age < 18 && person.gender === "male" && person.name === "Mike") {
        console.log("Mike is not old enough to see Mad Max Fury Road, don't let HIM in.");
    };
};

/******************************************************** OUTPUT ****************************************************************************/
// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/09. Loops and Arrays Practice Story Point 42/tempCodeRunnerFile.js"
// Mike is not old enough.
// Mike is not old enough to see Mad Max
// Mike is not old enough to see Mad Max Fury Road, don't let HIM in.
// Madeline is old enough.
// Madeline is old enough to see Mad Max.
// Madeline is old enough. SHE'S good to see Mad Max Fury Road.
// Cheryl is old enough.
// Sam is old enough.
// Suzy is not old enough.

// [Done] exited with code=0 in 0.037 seconds
/*__________________________________________________________________________________________________________________________________________*/

/*************************************************************** Optional Bonus challenge: **************************************************/ 
//  Imagine you have a button that toggles a light on and off. Loop through the following array of numbers                                  //
//  and toggle the button the numbers of times for each number. The array `[2, 3, 2]` would toggle the button 7 times.                      //
//  The light is off to start with. Log to the console whether or not the light is on at the end.                                           //
/*__________________________________________________________________________________________________________________________________________*/

var lightSwitch = [2,3,2]
//*Step 1. Create a var reflecting the count. (The "= 0" is where the count starts
var count = 0;                                      
//*Step 2. Create for loop to run through array 
for (var i = 0; i < lightSwitch.length; i++) { 
//*Step 3. "count" starts at "0", "+=" sums the prior #, and adds it to # in the array until directed. This case would be the end of the array.
    count += lightSwitch[i]
//*Step 4. Since there are 2 options (on and off), divide by 2. Even = off, Odd = on, 0 can't be divided, !== makes sure [i] doesnt = 0
    if (count % 2 !== 0) {  
//*Step 5. if the count ends on an even #, this will result in "The light is off!"
        console.log("The Light is off!")            
    } else { 
//*Step 6. if the count ends on an odd #, this will result in "The light is on!"
        console.log("The Light is on!")             
    }
}
/******************************************************** OUTPUT ****************************************************************************/
/* [Running] node "/home/chance/lvl1Vschool/lvl1assignments/09. Loops and Arrays Practice Story Point 42/tempCodeRunnerFile.js"             */
/* The Light is on!                                                                                                                         */
/* The Light is off!                                                                                                                        */
/* The Light is off!                                                                                                                        */
/*                                                                                                                                          */
/* [Done] exited with code=0 in 0.038 seconds                                                                                               */
/*__________________________________________________________________________________________________________________________________________*/
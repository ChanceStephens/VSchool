/*################################################ Loops and Arrays Practice Story Point 42 ################################################*/
/*################################################################ Clean ###################################################################*/
/********************************************************************************************************************************************/
/*__________________________________________________________________________________________________________________________________________*/
/*                                                                                                                                          */
/*********** 1. Loop through the following array and count how many "computers" there are. Log the final count: DONE! ***********************/

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]    
var computerCount = 0                               
    for(var i = 0; i < officeItems.length; i++) {   
        if (officeItems[i] === "computer") {        
            computerCount++;                        
        }
    }    
        console.log(computerCount)                
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

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {          

var person = peopleWhoWantToSeeMadMaxFuryRoad[i];                                   
 
    if (person.age >= 18) { 
 console.log(person.name + " is old enough.");                                   
    }
    if (person.age >= 18 && person.name === "Madeline") {
        console.log(person.name + " is old enough to see Mad Max.");                    
    };
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
//******************************************************** OUTPUT ***************************************************************************/
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
var count = 0;                                  
for (var i = 0; i < lightSwitch.length; i++) {
    count += lightSwitch[i]
    if (count % 2 !== 0) { 
        console.log("The Light is off!")            
    } else { 
        console.log("The Light is on!")             
    }
}

//******************************************************** OUTPUT ***************************************************************************/
// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/09. Loops and Arrays Practice Story Point 42/tempCodeRunnerFile.js"             */
// The Light is on!                                                                                                                         */
// The Light is off!                                                                                                                        */
// The Light is off!                                                                                                                        */
//                                                                                                                                          */
// [Done] exited with code=0 in 0.038 seconds                                                                                               */
/*__________________________________________________________________________________________________________________________________________*/

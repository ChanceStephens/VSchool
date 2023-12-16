/*########################### DJ Event Listener Practice #################################*/
/*################################## With Notes ##########################################*/
//                                                                                        //
/****************************** Exercise Instructions *************************************/
// You're starting your business as a strictly online DJ (DJ JS) and you want to start by //
// creating a website where people can change the color of a square on the page by        // 
// interacting with different HTML Events.                                                //
//                                                                                        //
// The square's color will change as follows:                                             //
// - Blue when the mouse hovers over the square                                           //
// - Red when the mouse button is held down over the square                               //
// - Yellow when the mouse button is let go over the square                               //
// - Green when the mouse is double clicked in the square                                 //
// - Orange when the mouse scroll is used somewhere in the window (not just over          //
//      the square).                                                                      //
// - You should also be able to press the first letter of the colors (typing "r"          //
//      on the keyboard for "red", for example) and have the box change to that color.    // 
//      Check out the key and keyCode property of `e.target`                              //
//                                                                                        //
// Attempt these requirements. If you become discouraged, included are things to consider.//
// Take a minute to think through how you would implement all of these event listeners.   //
// You will need a different event for each event. Keyboard events are                    //
//      triggered by any key.                                                             //
// `.addEventListener` will be called on your square 6 times.                             //

// Selecting an HTML element with the id "header" and storing it in the variable 'header'
var header = document.getElementById("header");


// Changing the text color of the 'header' element to the RGB color (214, 26, 104)
header.style.color = "rgb(214, 26, 104)";
// Selecting an HTML element with the id "box" and storing it in the variable 'box'
var box = document.getElementById("box");
// Changing the background color of the 'box' element to "deeppink"
box.style.backgroundColor = "deeppink";
// Adding a box shadow to the 'box' element with specific properties
box.style.boxShadow = "4px 8px 16px 32px deeppink";
// Setting the height of the 'box' element to 570 pixels
box.style.height = "570px";
// Setting the width of the 'box' element to 700 pixels
box.style.width = "700px";


// Adding an event listener to the 'box' element that listens for the "mouseover" event
// and triggers the 'blueBox' function when the event occurs
box.addEventListener("mouseover", blueBox);
// Defining the 'blueBox' function that is called when the "mouseover" event happens
function blueBox() {
  // Changing the background color of the 'box' element to "darkTurquoise"
  box.style.backgroundColor = "darkTurquoise";
  // Adding a box shadow to the 'box' element with specific properties
  box.style.boxShadow = "4px 8px 16px 32px darkTurquoise";
}

// Adding an event listener to the 'box' element that listens for the "mousedown" event
// and triggers the 'redBox' function when the event occurs
box.addEventListener("mousedown", redBox);

// Defining the 'redBox' function that is called when the "mousedown" event happens
function redBox() {
  // Changing the background color of the 'box' element to "crimson"
  box.style.backgroundColor = "crimson";

  // Adding a box shadow to the 'box' element with specific properties
  box.style.boxShadow = "4px 8px 16px 32px crimson";
}


// Adding an event listener to the 'box' element that listens for the "mouseup" event
// and triggers the 'yellowBox' function when the event occurs
box.addEventListener("mouseup", yellowBox);

// Defining the 'yellowBox' function that is called when the "mouseup" event happens
function yellowBox() {
  // Changing the background color of the 'box' element to "yellow"
  box.style.backgroundColor = "yellow";

  // Adding a box shadow to the 'box' element with specific properties
  box.style.boxShadow = "4px 8px 16px 32px yellow";
}


// Adding an event listener to the 'box' element that listens for the "dblclick" event
// and triggers the 'greenBox' function when the event occurs
box.addEventListener("dblclick", greenBox);

// Defining the 'greenBox' function that is called when the "dblclick" event happens
function greenBox() {
  // Changing the background color of the 'box' element to "springgreen"
  box.style.backgroundColor = "springgreen";

  // Adding a box shadow to the 'box' element with specific properties
  box.style.boxShadow = "4px 8px 16px 32px springgreen";
}


// Adding an event listener to the 'box' element that listens for the "mouseout" event
// and triggers the 'orangeBox' function when the mouse pointer leaves the element
box.addEventListener("mouseout", orangeBox);

// Defining the 'orangeBox' function that is called when the "mouseout" event happens
function orangeBox() {
  // Changing the background color of the 'box' element to "orangeRed"
  box.style.backgroundColor = "orangeRed";

  // Adding a box shadow to the 'box' element with specific properties
  box.style.boxShadow = "4px 8px 16px 32px orangeRed";
}


// Adding an event listener to the 'header' element that listens for the "mouseover" event
header.addEventListener("mouseover", function(e) {
    // Changing the background color of the 'box' element to "deepPink"
    box.style.backgroundColor = "deepPink";
  
    // Adding a box shadow to the 'box' element with specific properties
    box.style.boxShadow = "4px 8px 16px 32px deepPink";
  });


  // Adding an event listener to the 'body' element that listens for the "keydown" event
document.body.addEventListener("keydown", function(e) {
    // Checking which key was pressed
    if (e.key === "b") {
      // Changing the background color of the 'box' element to "darkTurquoise"
      box.style.backgroundColor = "darkTurquoise";
      // Adding a box shadow to the 'box' element with specific properties
      box.style.boxShadow = "4px 8px 16px 32px darkTurquoise";
    } else if (e.key === "r") {
      // Changing the background color of the 'box' element to "crimson"
      box.style.backgroundColor = "crimson";
      // Adding a box shadow to the 'box' element with specific properties
      box.style.boxShadow = "4px 8px 16px 32px crimson";
    } else if (e.key === "y") {
      // Changing the background color of the 'box' element to "yellow"
      box.style.backgroundColor = "yellow";
      // Adding a box shadow to the 'box' element with specific properties
      box.style.boxShadow = "4px 8px 16px 32px yellow";
    } else if (e.key === "g") {
      // Changing the background color of the 'box' element to "springGreen"
      box.style.backgroundColor = "springGreen";
      // Adding a box shadow to the 'box' element with specific properties
      box.style.boxShadow = "4px 8px 16px 32px springGreen";
    } else if (e.key === "o") {
      // Changing the background color of the 'box' element to "orangeRed"
      box.style.backgroundColor = "orangeRed";
      // Adding a box shadow to the 'box' element with specific properties
      box.style.boxShadow = "4px 8px 16px 32px orangeRed";
    }
  });
  
  
  // Adding an event listener to the 'body' element that listens for the "keyup" event
document.body.addEventListener("keyup", function(e) {
    // Resetting the background color of the 'box' element to "deeppink"
    box.style.backgroundColor = "deeppink";
    // Resetting the box shadow of the 'box' element to specific properties
    box.style.boxShadow = "4px 8px 16px 32px deeppink";
  });
  
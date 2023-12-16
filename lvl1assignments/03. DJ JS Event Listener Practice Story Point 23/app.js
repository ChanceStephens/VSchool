/*########################### DJ Event Listener Practice #################################*/
/*################################## Clean ###############################################*/
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

var header = document.getElementById("header")
  header.style.color = "rgb(214, 26, 104";
  
var box = document.getElementById("box")
box.style.backgroundColor = "deeppink";
box.style.boxShadow = "4px 8px 16px 32px deeppink";
box.style.height = "570px";
box.style.width = "700px";
  
box.addEventListener("mouseover", blueBox);
function blueBox() {
  box.style.backgroundColor = "darkTurquoise";
  box.style.boxShadow = "4px 8px 16px 32px darkTurquoise";
}

box.addEventListener("mousedown", redBox);
function redBox(){
  box.style.backgroundColor = "crimson";
  box.style.boxShadow = "4px 8px 16px 32px crimson";
}

box.addEventListener("mouseup", yellowBox);
function yellowBox(){
  box.style.backgroundColor = "yellow";
  box.style.boxShadow = "4px 8px 16px 32px yellow";
}

box.addEventListener("dblclick", greenBox);
function greenBox(){
  box.style.backgroundColor = "springgreen";
  box.style.boxShadow = "4px 8px 16px 32px springgreen";
}

box.addEventListener("mouseout", orangeBox);
function orangeBox(){
  box.style.backgroundColor = "orangeRed";
  box.style.boxShadow = "4px 8px 16px 32px orangeRed";
}
header.addEventListener("mouseover", function(e){
  box.style.backgroundColor = "deepPink";
  box.style.boxShadow = "4px 8px 16px 32px deeppink";
})

document.body.addEventListener("keydown", function(e){
  if (e.key === "b"){
    box.style.backgroundColor = "darkTurquoise";
    box.style.boxShadow = "4px 8px 16px 32px darkTurquoise"
  } else if (e.key === "r"){
    box.style.backgroundColor = "crimson";
    box.style.boxShadow = "4px 8px 16px 32px crimson"
  } else if (e.key === "y"){
    box.style.backgroundColor = "yellow";
    box.style.boxShadow = "4px 8px 16px 32px yellow"
  } else if (e.key === "g"){
    box.style.backgroundColor = "springGreen";
    box.style.boxShadow = "4px 8px 16px 32px springGreen"
  } else if (e.key === "o"){
    box.style.backgroundColor = "orangeRed";
    box.style.boxShadow = "4px 8px 16px 32px orangeRed"
}})

document.body.addEventListener("keyup", function (e){
box.style.backgroundColor = "deeppink"; 
box.style.boxShadow = "4px 8px 16px 32px deeppink" 
})
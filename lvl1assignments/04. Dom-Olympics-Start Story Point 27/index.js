/*########################### DOM OLYMPICS START Story Point 30.5 #################################*/
/*######################################## Clean ##################################################*/

var header = document.getElementById("header")    

header.innerHTML += "<h1>JavaScript Made This!!</h1>";    
header.innerHTML += "<h3><span id='span1'>Chance Stephens</span> wrote this JavaScript</h3>";   
header.style.textAlign = "center"
header.style.borderBottom = "5px solid black";
header.style.marginBottom = "7px";

document.getElementById("span1").style.color = "darkCyan";

const instantMessage = document.getElementsByClassName("messages");

const jokester = document.querySelectorAll(".left");
    for (var i = 0; i < jokester.length; i++) {
  jokester[0].textContent = "Knock! Knock!";
  jokester[1].textContent = "Europe...";         
}  
const jokeLeft = document.createElement("div");
jokeLeft.setAttribute("class","message left");
  jokeLeft.textContent = "NO! YOU'RE A POO!! 💩😂 HAHAHA!!!";
  instantMessage[0].appendChild(jokeLeft);

const target = document.querySelectorAll(".right");
for (var i = 0; i < target.length; i++) {
  target[0].textContent = "Who's There?";
  target[1].textContent = "Europe who?";  
} 

jokeRight = document.createElement("div");
jokeRight.setAttribute("class","message right");
  jokeRight.textContent = "You're a 🤡!"
  instantMessage[0].appendChild(jokeRight);

const clearButton = document.getElementById("clear-button");
function clearMessage() {
   
    for (var i = 0; i < instantMessage.length; i++) {
        instantMessage[i].textContent = "";
    }
}
clearButton.addEventListener("click", clearMessage);

const themeDropdown = document.getElementById("theme-drop-down");
const leftMessages = document.querySelectorAll(".left");
const rightMessages = document.querySelectorAll(".right");

themeDropdown.addEventListener("change", function () {
    const selectedTheme = themeDropdown.value;
    if (selectedTheme === "theme-one") {

        leftMessages.forEach((message) => {
            message.style.backgroundColor = "blue";
            message.style.color = "white";
            message.style.border = "5px solid brown";
            
        });
        rightMessages.forEach((message) => {
            message.style.backgroundColor = "brown";
            message.style.color = "white";
            message.style.border = "5px solid blue";
        });
    } else if (selectedTheme === "theme-two") {

        leftMessages.forEach((message) => {
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.style.border = "5px solid black";
        });
        rightMessages.forEach((message) => {
            message.style.backgroundColor = "black";
            message.style.color = "white";
            message.style.border = "5px solid red";
        });
    }
});




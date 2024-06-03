/*########################### DOM OLYMPICS START Story Point 30.5 #################################*/
/*######################################## With Notes #############################################*/

// Select the 'header' element and update its content and styles
var header = document.getElementById("header");
header.innerHTML += "<h1>JavaScript Made This!!</h1>";
header.innerHTML += "<h3><span id='span1'>Chance Stephens</span> wrote this JavaScript</h3>";
header.style.textAlign = "center";
header.style.borderBottom = "5px solid black";
header.style.marginBottom = "7px";

// Change the text color of the element with id 'span1' to "darkCyan"
document.getElementById("span1").style.color = "darkCyan";

// Select elements with the class "messages" and "left", update their text content
// Create a new message element and append it to the "messages" container
const instantMessage = document.getElementsByClassName("messages");
const jokester = document.querySelectorAll(".left");
jokester[0].textContent = "Knock! Knock!";
jokester[1].textContent = "Europe...";
const jokeLeft = document.createElement("div");
jokeLeft.setAttribute("class", "message left");
jokeLeft.textContent = "NO! YOU'RE A POO!! 💩😂 HAHAHA!!!";
instantMessage[0].appendChild(jokeLeft);

// Select elements with the class "right" and update their text content
// Create a new message element and append it to the "messages" container
const target = document.querySelectorAll(".right");
target[0].textContent = "Who's There?";
target[1].textContent = "Europe who?";
const jokeRight = document.createElement("div");
jokeRight.setAttribute("class", "message right");
jokeRight.textContent = "You're a 🤡!";
instantMessage[0].appendChild(jokeRight);

// Create a function to clear messages and attach it to a button's click event
const clearButton = document.getElementById("clear-button");
function clearMessage() {
    for (var i = 0; i < instantMessage.length; i++) {
        instantMessage[i].textContent = "";
    }
}
clearButton.addEventListener("click", clearMessage);

// Add event listener to a theme dropdown to change message background colors
const themeDropdown = document.getElementById("theme-drop-down");
const leftMessages = document.querySelectorAll(".left");
const rightMessages = document.querySelectorAll(".right");

themeDropdown.addEventListener("change", function () {
    const selectedTheme = themeDropdown.value;
    if (selectedTheme === "theme-one") {
        leftMessages.forEach((message) => {
            message.style.backgroundColor = "blue";
        });
        rightMessages.forEach((message) => {
            message.style.backgroundColor = "brown";
        });
    } else if (selectedTheme === "theme-two") {
        leftMessages.forEach((message) => {
            message.style.backgroundColor = "red";
        });
        rightMessages.forEach((message) => {
            message.style.backgroundColor = "black";
        });
    }
});


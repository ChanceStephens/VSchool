const clickForm = document.forms['clicker'];
const clickButton = clickForm.elements['go'];
let clickCount = 0;

// Function to handle button click
function handleButtonClick() {
  clickCount++;
  alert(`Button clicked! Click count: ${clickCount}`);
}

// Add event listener to the button
clickButton.addEventListener('click', handleButtonClick);


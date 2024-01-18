const goButton = document.querySelector('button'); // Button to click and start the Count
const resetButton = document.querySelector('.reset'); // Button to reset the "speed"
const currentSpeed = document.querySelector('.scoreContainer'); // Display the # of clicks
const countdownDisplay = document.querySelector('.countdownContainer'); // Display the countdown timer

let clickCount = localStorage.getItem('clickCount') || 0; // Checks if there is a stored value, if not, set it to 0

currentSpeed.textContent = `Speed: ${clickCount} mph`; // initial Display of the # of clicks as MPH 

let clickInterval; // Declare the variable for the interval outside the click event
let countdownTimer; // Declare the variable for the countdown timer
let countdownStarted = true; // Flag to track whether the countdown has started

goButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    // Check if the countdown has already started
    if (!countdownStarted) {
        // Start a new interval for the user to click within
        clickInterval = setInterval(function() {
            currentSpeed.textContent = `Speed: ${clickCount} mph`; // Update display
            localStorage.setItem('clickCount', clickCount); // Store the updated click count
        }, 1000);

        // Set a fixed 30 seconds countdown timer
        startCountdown(30);

        countdownStarted = true; // Set the flag to true
    }

    clickCount++; // Increment click count when "Go Speed Racer" is clicked
    currentSpeed.textContent = `Speed: ${clickCount} mph`; // Update display
    localStorage.setItem('clickCount', clickCount); // Store the updated click count
});


    // Check if the countdown has already started
    if (!countdownStarted) {
        // Start a new interval for the user to click within
        clickInterval = setInterval(function() {
            currentSpeed.textContent = `Speed: ${clickCount} mph`; // Update display
            localStorage.setItem('clickCount', clickCount); // Store the updated click count
        }, 1000);

        // Set a fixed 30 seconds countdown timer
        startCountdown(30);

        countdownStarted = true; // Set the flag to true
    }


resetButton.addEventListener('click', function() {
    clearInterval(clickInterval); // Stops the clickInterval
    clearInterval(countdownTimer); // Stops the countdown timer
    reset(); // Reset the countdown and click count
});

function startCountdown(duration) {
    let timer = duration;
    updateCountdownDisplay(timer);

    // Countdown timer
    countdownTimer = setInterval(function() {
        timer--;
        updateCountdownDisplay(timer);

        if (timer <= 0) {
            clearInterval(clickInterval);
            clearInterval(countdownTimer);
            goButton.disabled = true; // Disable the "Go Speed Racer" button when the countdown ends
            countdownDisplay.textContent = 'Lap Time: Ended';
        }
    }, 1000);
}

function updateCountdownDisplay(timer) {
    countdownDisplay.textContent = `Lap Time: ${timer}s`;
}

function reset() {
    goButton.disabled = false; // Enable the "Go Speed Racer" button
    clickCount = 0; // Reset click count
    currentSpeed.textContent = `Speed: ${clickCount} mph`; // Update display
    localStorage.setItem('clickCount', clickCount); // Reset storage value
    countdownDisplay.textContent = 'Lap Time:'; // Reset countdown display
    countdownStarted = false; // Reset the countdownStarted flag
}






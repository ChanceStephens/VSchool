const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase()
const shift = parseInt(readline.question('How many letters would you like to shift? '),)

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarsCipher() {
    // Splits the user input (assumed to be stored in a variable called `input`) into an array of individual characters (strings).
    const inputToStrings = input.split("");
    
    // Starts a `map` operation on the array `inputToStrings`, applying a function to each element of the array and returning a new array with the results.
    return inputToStrings.map((letter) => {
        // Finds the index of each character in the input string within the `alphabet` array. If the character is not found in the alphabet array, `index` will be `-1`.
        const index = alphabet.indexOf(letter);
        
        // Calculates the new index for the character based on a shift value (assumed to be defined elsewhere in the code). This shift value determines how many positions each character in the input string will be shifted in the alphabet.
        const newIndex = index + shift;
        
        // If the new index exceeds the length of the alphabet (which has 26 letters), this condition ensures that the index wraps around to the beginning of the alphabet.
        if (newIndex > 25) {
            return alphabet[newIndex - 26];
        }        
        
        // If the new index is within the range of the alphabet, returns the corresponding letter from the `alphabet` array.
        return alphabet[newIndex];
    }).join(""); // Joins the array of shifted letters back into a single string.
}

// Calls the `caesarsCipher` function and logs the result to the console.
console.log(caesarsCipher())


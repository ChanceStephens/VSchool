/*      Error Handling STORY POINT 121

try {
    // try out some code
    // if an error occurs (if an erro is thrown)
    if (2 === 2) {
        throw "Hey I am an error!"
    }
    console.log("Did I console log?")
}

catch(err) {
    // handle the err
    console.log(err)
}

finally {
    console.log("I am running no matter what!") 
}
*/

//app.js

// const axios = require("axios");

axios.get("https://api.vschool.io/pokemon")
  .then(response => {
    // Step two - Display the data
    displayData(response.data.results);
  })
  .catch(error => {
    // Handle errors if any
    console.error('Error fetching Pokémon data:', error);
  });
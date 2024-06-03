import jillImage from "../images/jill.jpg"; // Importing image for Jill
import johnJohnsonImage from "../images/johnjohnson.jpg"; // Importing image for John Johnson
import bearTheBearImage from "../images/bearthebear.jpg"; // Importing image for Bear the Bear
import laurenImage from "../images/lauren.jpg"; // Importing image for Lauren
import sallyImage from "../images/sally.jpg"; // Importing image for Sally
import samanthaImage from "../images/samantha.jpg"; // Importing image for Samantha
import indyImage from "../images/indy.jpg"; // Importing image for Indy
import annaImage from "../images/anna.jpg"; // Importing image for Anna
import shannonImage from "../images/shannon.jpg"; // Importing image for Shannon
import fluffyImage from "../images/fluffy.jpg"; // Importing image for Fluffy
import patchesImage from "../images/patches.jpg"; // Importing image for Patches
import tigerImage from "../images/tiger.jpg"; // Importing image for Tiger
import oscarImage from "../images/oscar.jpg"; // Importing image for Oscar
import spotImage from "../images/spot.jpg"; // Importing image for Spot

const friends = [
  {
    name: "Jill", // Friend's name
    age: 29, // Friend's age
    image: jillImage, // Friend's image
    pets: [
      {
        name: "Spot", // Pet's name
        breed: "Mutt", // Pet's breed
        image: spotImage // Pet's image
      },{
        name: "John Johnson", // Pet's name
        breed: "Husky", // Pet's breed
        image: johnJohnsonImage // Pet's image
      },{
        name: "Bear the Bear", // Pet's name
        breed: "Leonberger", // Pet's breed
        image: bearTheBearImage // Pet's image
      }
    ]
  }, // Friend object
  {
    name: "Lauren", // Friend's name
    age: 31, // Friend's age
    image: laurenImage, // Friend's image
    pets: [
      {
        name: "Sally", // Pet's name
        breed: "Australian Shepherd", // Pet's breed
        image: sallyImage // Pet's image
      }
    ]
  }, // Friend object
  {
    name: "Samantha", // Friend's name
    age: 25, // Friend's age
    image: samanthaImage, // Friend's image
    pets: [
      {
        name: "Indy", // Pet's name
        breed: "Akita", // Pet's breed
        image: indyImage // Pet's image
      },{
        name: "Anna", // Pet's name
        breed: "Persian Cat", // Pet's breed
        image: annaImage // Pet's image
      }
    ]
  }, // Friend object
  {
    name: "Shannon", // Friend's name
    age: 20, // Friend's age
    image: shannonImage, // Friend's image
    pets: [
      {
        name: "Fluffy", // Pet's name
        breed: "Sphynx Cat", // Pet's breed
        image: fluffyImage // Pet's image
      },{
        name: "Patches", // Pet's name
        breed: "Sphynx Cat", // Pet's breed
        image: patchesImage // Pet's image
      },{
        name: "Tiger", // Pet's name
        breed: "Sphynx Cat", // Pet's breed
        image: tigerImage // Pet's image
      },{
        name: "Oscar", // Pet's name
        breed: "Sphynx Cat", // Pet's breed
        image: oscarImage // Pet's image
      }
    ]
  } // Friend object
  // Additional friends and their pets can be added following the same structure
];

export default friends; // Exporting the friends array

import jillImage from "../images/jill.jpg";
import johnJohnsonImage from "../images/johnjohnson.jpg";
import bearTheBearImage from "../images/bearthebear.jpg";
import laurenImage from "../images/lauren.jpg";
import sallyImage from "../images/sally.jpg";
import samanthaImage from "../images/samantha.jpg";
import indyImage from "../images/indy.jpg";
import annaImage from "../images/anna.jpg";
import shannonImage from "../images/shannon.jpg";
import fluffyImage from "../images/fluffy.jpg";
import patchesImage from "../images/patches.jpg";
import tigerImage from "../images/tiger.jpg";
import oscarImage from "../images/oscar.jpg";
import spotImage from "../images/spot.jpg";

const friends = [
  {
    name: "Jill Anderson",
    age: 29,
    image: jillImage,
    pets: [
      {
        name: "Spot",
        breed: "Mutt",
        image: spotImage
      },{
        name: "John Johnson",
        breed: "Husky",
        image: johnJohnsonImage
      },{
        name: "Bear the bear",
        breed: "Leonberger",
        image: bearTheBearImage
      }
    ]
  },{
    name: "Lauren Everhart",
    age: 31,
    image: laurenImage,
    pets: [
      {
        name: "Sally",
        breed: "Australian Shepard",
        image: sallyImage
      }
    ]
  },{
    name: "Samantha Sterling",
    age: 25,
    image: samanthaImage,
    pets: [
      {
        name: "Indy",
        breed: "Akita",
        image: indyImage
      },{
        name: "Anna",
        breed: "Persian Cat",
        image: annaImage
      }
    ]
  },{
    name: "Shannon Surratt",
    age: 20,
    image: shannonImage,
    pets: [
      {
        name: "Fluffy",
        breed: "Sphynx Cat",
        image: fluffyImage
      },{
        name: "Patches",
        breed: "Sphynx Cat",
        image: patchesImage
      },{
        name: "Tiger",
        breed: "Sphynx Cat",
        image: tigerImage
      },{
        name: "Oscar",
        breed: "Sphynx Cat",
        image: oscarImage
      }
    ]
  }
];

export default friends;
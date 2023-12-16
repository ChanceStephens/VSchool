
/**********************PROBLEM 1****************************/
const firstArray = [6, 13, 250, 3];
const secondArray = [3, 5, 2, 8, 1];
const thirdArray = [-13, 40, 3, 0, 19, 22];

const findMax = (array) => {
    array.sort(function(x, y) {
        return y - x;    
});
    return array[0];
};
console.log(findMax(firstArray));   //=========> 250
console.log(findMax(secondArray));  //=========> 8
console.log(findMax(thirdArray));   //=========> 40

/**********************PROBLEM 2****************************/

const fourthArray = ["$hello!", "%%^%%", "test!"];
const fifthArray = ["#3", "$$$", "C%4!", "Hey!"];
const sixthArray = ["#3", "$$$", "C%4!", "Hey!"];

const findCharacter = (array, character) => {
    return array.filter(element => element.includes(character));
};

    console.log(findCharacter(fourthArray, "!"));   //=========> [ '$hello!', 'test!' ]
    console.log(findCharacter(fifthArray, "!"));    //=========> [ 'C%4!', 'Hey!' ]
    console.log(findCharacter(sixthArray, "h"));    //=========> []

/**********************PROBLEM 3****************************/

const division = (num1, num2) => {
    return num1%num2 === 0;
}
console.log(division(4, 2));     //=========> true
console.log(division(9, 3));     //=========> true
console.log(division(15, 4));     //=========> false
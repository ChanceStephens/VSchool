//      ***Forception***
    /*Write a function that takes two arrays as parameters. 
    The first array will be an array of people's names, 
    and the second array will be the alphabet.*/ 

    {    /*Using a for loop within a for loop, create and return array that looks like this:

    function forception(people, alphabet){
    // your code here
}
// Output:
["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", 
"E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
"V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", 
"D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
"U", "V", "W", "X", "Y", "Z"]                                                       */
}

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]        //People Array
var alphabet = "abcdefghijklmnopqrstuvwxyz"                         //Alphabet Array

function forception(people, alphabet) {                             //Create the function to inlcude the "Paramenters" people and alphabet arrays
    let tempArray = [];                                             //create a blank array to push to
    for (var i = 0; i < people.length; i++) {                       //create a for loop to run through the poeple array 
        tempArray.push(people[i] + ":")                             //push that array to the tempArray while adding the colon to their name
        for (var j = 0; j < alphabet.length; j++) {                 //create a for loop to run through the alphabet array
            tempArray.push(alphabet[j].toUpperCase());              //push that array to the tempArray while capitalizing all the letters 
        }
        tempArray.push();                                           //pushes the final output of both loops to the tempArray
    }    
    return tempArray;                                               //returns the results of the tempArray
}
    const finalArray = forception(people, alphabet);                //create a variable for the final output of the Function
    console.log(finalArray);                                        //print the result of the Funtion

{   /* FINAL RESULT
[Running] node "/home/chance/lvl1Vschool/lvl1assignments/12. Forception Story Point 51.5/tempCodeRunnerFile.js"
[
  'Jon:', 'A', 'B', 'C', 'D',       'E',       'F',
  'G',    'H', 'I', 'J', 'K',       'L',       'M',
  'N',    'O', 'P', 'Q', 'R',       'S',       'T',
  'U',    'V', 'W', 'X', 'Y',       'Z',       'Jacob:',
  'A',    'B', 'C', 'D', 'E',       'F',       'G',
  'H',    'I', 'J', 'K', 'L',       'M',       'N',
  'O',    'P', 'Q', 'R', 'S',       'T',       'U',
  'V',    'W', 'X', 'Y', 'Z',       'Jingle:', 'A',
  'B',    'C', 'D', 'E', 'F',       'G',       'H',
  'I',    'J', 'K', 'L', 'M',       'N',       'O',
  'P',    'Q', 'R', 'S', 'T',       'U',       'V',
  'W',    'X', 'Y', 'Z', 'Heimer:', 'A',       'B',
  'C',    'D', 'E', 'F', 'G',       'H',       'I',
  'J',    'K', 'L', 'M', 'N',       'O',       'P',
  'Q',    'R',
  ... 35 more items
]*/
}


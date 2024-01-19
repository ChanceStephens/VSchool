// Using the provided `peopleArray`, write a function that:

// 1. Returns a list of everyone older than 18,
// 2. Which is sorted alphabetically by last name,
// 3. And where each name and age is embedded in a string that looks like an HTML `<li>` element.

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){                          // Define the function to sort and filter the peopleArray    
    arr.sort(function(a, b) {                       // Sort the array alphabetically by last name        
        let lastNameA = a.lastName.toLowerCase();   // Convert last names to lowercase for case-insensitive sorting
        let lastNameB = b.lastName.toLowerCase();        
        if (lastNameA < lastNameB) {                // Compare lowercase last names and return -1, 1, or 0
            return -1;
        } else if (lastNameA > lastNameB) {
            return 1;
        } else {
            return 0;
        }  
    })
//                                                     Filter the array to include only people older than 18
//                                                     Filtering: create a new array with elements satisfying the condition
    return arr
        .filter(function(person){            
            return person.age > 18;                 // Include only people older than 18
        })        
        .map(function(person) {                     // Map the filtered array to HTML `<li>` elements
//                                                     Mapping: transform each element into a new value            
            return `<h1>${person.firstName} ${person.lastName} is ${person.age}</h1>`// Concatenate HTML string with name and age            
        })     
//                                                     Combined filter and map operations for concise code
//                                                     Why Combined: chain methods for a readable expression of desired operations
}
console.log(sortedOfAge(peopleArray));      
/*
 Output:
 [
     "<h1>Kyle Mooney is 27</h1>",
     "<h1>Sarah Palin is 47</h1>",
     "<h1>Rick Sanchez is 78</h1>",
     "<h1>Morty Smith is 29</h1>",
     "<h1>Lev Tolstoy is 82</h1>"
 ]
 */

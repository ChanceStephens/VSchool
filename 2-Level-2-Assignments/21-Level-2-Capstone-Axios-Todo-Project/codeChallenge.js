//Given the following code below, write a function that uses  .map()  to wrap each string/name in the array in an <h1> opening and closing tag.

const people = [ "John", "Adam", "Amber" ]
function peopleElements(arr) {
    const newArr = arr.map(people => (`<h1>${people}</h1>`))
    return newArr
}

console.log(peopleElements(people))

//Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
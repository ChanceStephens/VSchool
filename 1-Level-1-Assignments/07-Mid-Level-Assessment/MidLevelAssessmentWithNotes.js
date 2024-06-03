/*####################################### Mid Level Assessment #################################*/
/*############################################# With Notes #####################################*/
/************************************************************************************************/
// Create a constructor function called **`Book`** that takes in parameters for                 //
// **`title`**, **`author`**, and **`year`**.                                                   //
// The constructor function should have a method called **`getDetails`** that                   //
// returns a string with the book's title, author, and year.                                    //
// Instantiate two new Books using the below code to test your solution.                        //
/************************************************************************************************/

// Define a constructor function 'Book' that initializes title, author, and year properties.
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // Define a method 'getDetails' to return book details as a string.
    this.getDetails = function() {
        return "Title: " + this.title + ", Author: " + this.author + ", Year: " + this.year;
    };
}

// Create a new 'Book' instance 'book1' and log its details to the console.
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails());

// Create 'book2', 'book3', and 'book4' instances and log their details to the console.
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails());

const book3 = new Book("Charlotte's Web", "E.B. White", 1952);
console.log(book3.getDetails());

const book4 = new Book("Old Yeller", "Fred Gipson", 1957);
console.log(book4.getDetails());


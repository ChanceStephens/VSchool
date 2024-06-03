//  1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type `number`:


function sum(x, y){//==============================================>    Function that returns sum of 2 numbers
  //check data types first and throw error
    if (typeof x !== 'number' || typeof y !== 'number') { //=======>    Check data types first and throw an error if either argument is not of type 'number'
            throw "argument is not of the data type 'number'"//====>    Throw an error message if the data type check fails
    }
        return x + y;//============================================>    If both arguments are numbers, return their sum
}    
try {//============================================================>    Use a try block to handle potential errors
    const example = sum('1', '2')//================================>    Call the sum function with string arguments '1' and '2' (***these are strings not numbers***)
    console.log(example)//=========================================>    Log the result if there is no error
} catch(err) {
    console.log('Error:', err)//===================================>    Catch and log any errors that occur during the execution
}

//  1b) Call the `sum` function inside a `try` block using `"1"` and `"2"` as arguments. Use `console.log` within a `catch` block to inform the user of the error.
//###########################################################################################################################################################################>

//  2a) Given a user object, write a function called `login` that takes a `username` and `password` as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying `"login successful!"`

var user = {username: "sam", password: "123abc"};//==>  Define a user object with username and password

function login(username, password){//================>  Define a function named login that takes username and password parameters
  //check credentials
    if (username !== "sam") {
        throw "username does not match";    //=======>  Throw an error if the username does not match
    } 
    if (password !== "123abc") {
        throw "password does not match";    //=======>  Throw an error if the password does not match
    } 
        return "log in successful"    //=============>  If both username and password match, return "log in successful"
    }
try {// Use a try block to handle potential errors

    
    const example1 = login('Sam', '123abc')//========>  Case-sensitive comparison
    console.log(example1);

    // const example2 = login('sam', '123ABC')//========>  Case-sensitive comparison
    // console.log(example2);

    // const example3 = login('sam', '123abc')    
    // console.log(example3);
} catch(err) {// =====================================Catch and log any errors that occur during the execution
    console.log('Error:', err)
}
//  2b) Call the `login` function within a `try` block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
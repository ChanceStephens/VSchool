//### CUSTOM COMPONENT QUIZ?

//1. What is a React component?
    /*My Answer: Placing the React Code with in a function and calling it to render*/
    /*Steve's Answer: A function that returns React elements (or UI)*/
//2. What’s wrong with this code?
    /*My Answer:You need to import React and ReactDOM then you need to get the element in which you intend to place it from HTML
    and then render it.  Also the first letter of myComponent needs to be capitalized "MyComponent" (Pascal Cased)*/
    /*Steve's Answer:  "MyComponent" (Pascal Cased)*/

function myComponent() {
return (
<small>I'm tiny text!</small>
)
}


//1. What’s wrong with this code?
    /*My Answer:You need to import React and ReactDOM then you need to get the element in which you intend to place it from HTML
    and then render it.The syntax of the "header" function being called in the render method should appear as <Header />.  A closing 
    parenthesis and curly bracket are also missing as well as the closing quotation for the element "root"*/
    /*Steve's Answer: We don't use parenthisis for our component, we use angle brackets < /> */

function Header() {
return (
<header>
<nav>
<img src="./react-logo.png" width="40px" />
</nav>
</header>
ReactDOM.render(Header(), document.getElementById("root))

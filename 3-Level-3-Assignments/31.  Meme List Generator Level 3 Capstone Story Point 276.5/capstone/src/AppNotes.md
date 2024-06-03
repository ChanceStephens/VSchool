- then()
    .then() - A function that is a method used in JavaScript promises, which are objects representing the eventual completion or failure of an asynchronous operation. In this specific context, .then() is used after a call to axios.get() to handle the successful completion of an HTTP GET request.

- res
    res - This is a parameter representing the response received from the HTTP GET request. The name res is often used as a shorthand for "response", but you can name it whatever you like.

- catch()
    .catch(): This function is called on the promise chain to handle errors.
    error => console.log(error): This is an arrow function that takes an error parameter and logs it to the console using console.log().
    So, when an error occurs during the HTTP request (e.g., network error, server error), Axios will catch the error and pass it to the .catch() function, which will then log the error to the console for debugging or error tracking purposes.

- Destructuring assignment
    In the code const { name, value } = event.target;, destructuring assignment is used to extract specific properties (name and value) from the event.target object.
    event.target: This represents the target DOM element that triggered the event. For example, if the event is a change event on an input element, event.target would refer to that input element.

    { name, value }: This syntax is used to destructure the event.target object. It means "extract the name and value properties from the event.target object and assign them to variables with the same names (name and value)".

    So, when an event occurs (e.g., a change event on an input element), event.target provides access to the DOM element that triggered the event. By using destructuring assignment, we can easily extract specific properties of interest from that DOM element and assign them to variables for further processing. In this case, name and value are commonly used properties of form elements like input fields.
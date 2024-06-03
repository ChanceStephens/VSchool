1. What is a React component?
- A function that returns React elements (or UI(user interface))

2. What's wrong with this code?

function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
- The component name must start with a Capital letter. "PascalCased" - PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized

3. What's wrong with this code?

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root))

- In the render() method, you must call the function with open and closing angle brackets.

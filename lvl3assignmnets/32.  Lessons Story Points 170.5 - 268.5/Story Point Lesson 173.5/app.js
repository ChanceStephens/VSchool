// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// JSX

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )
/* Scrimba Excercise */
const navBar = (
    
        <nav>
            <h1>Chance's Web Design</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
)
    ReactDOM.render(navBar, document.getElementById("root"))
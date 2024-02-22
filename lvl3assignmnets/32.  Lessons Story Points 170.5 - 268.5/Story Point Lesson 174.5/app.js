import React from "react"
// import ReactDom from "react-dom"
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
const rootElement = document.getElementById("root")

const dadJokes = (
    <ol>
        <li>
            <h1>Why don't skeletons fight each other?</h1>
            <h3> They don't have the guts.</h3>
        </li>
        <li>
            <h1>What do you call fake spaghetti?</h1>
            <h3> An impasta.</h3>
        </li>
        <li>
            <h1>Why did the scarecrow win an award?</h1>
            <h3> Because he was outstanding in his field.</h3>
        </li>
        <li>
            <h1>How do you organize a space party?</h1>
            <h3> You planet.</h3>
        </li>
        <li>
            <h1>Why don't scientists trust atoms?</h1>
            <h3> Because they make up everything.</h3>
        </li>
        <li>
            <h1>What do you call cheese that isn't yours?</h1>
            <h3> Nacho cheese!</h3>
        </li>
        <li>
            <h1>Why couldn't the bicycle stand up by itself?</h1>
            <h3> It was two-tired.</h3>
        </li>
        <li>
            <h1>What did the janitor say when he jumped out of the closet?</h1>
            <h3> "Supplies!"</h3>
        </li>
        <li>
            <h1>Why don't eggs tell jokes?</h1>
            <h3> Because they might crack up.</h3>
        </li>
        <li>
            <h1>I'm reading a book on anti-gravity.</h1>
            <h3> It's impossible to put down!</h3>
        </li>
    </ol>
);

ReactDom.render(dadJokes, rootElement)
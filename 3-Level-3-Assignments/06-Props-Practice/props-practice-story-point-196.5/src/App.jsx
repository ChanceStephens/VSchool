/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you"d like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don"t pass in a "question" prop, how might you make it only 
show the punchline?
*/


import "./App.css"
import Joke from "../src/Components/Joke"

function App() {
    return(
    <>
      <Joke        
        setup="Why did the web developer go broke?"
        punchline="Because he used up all his cache."
      />
      <Joke
        setup="Why did the web developer call an exterminator?"
        punchline="Because his code was infested with bugs!"
      />
      <Joke
        setup="Why did the developer quit his job?"
        punchline="He didn't get Arrays!"
      />
      <Joke
        setup="Why was the developer fired?"
        punchline="They didn't git his code."
      />
      <Joke
        setup="Why couldn't the developer get a job?"
        punchline="He didn't get callbacks!"
      />
    </>
    )
}

export default App

sumPoints = 10
totalPointsCompleted = 0
pointsCompleted = 10
findPointStatus = 10
totalDaysCompleted = 0
dailyTarget = 5
findDailyStatus = 2



const[totalDaysCompleted, setTotalDaysCompleted] = useState(0)
const incrementDay = () => {
    setTotalDaysCompleted(totalDaysCompleted + 1)
}
const [count, setCount] = useState(0);



setTotalDailyPointsCompleted(prevTotalDailyPointsCompleted => prevTotalDailyPointsCompleted + dailyPointsCompleted);
const[state, setState] = useState('')

setState(prevState => prevState + state)

1. setState()               This is my "setter" function that will update the state based on the code in the parentheses
2. prevState                This is the parameter of the setter function that now holds the state before this setter function is fired
3. => prevState + state     This will be the logic that will apply the prevState with any other logic you need. 
4. This function takes prevState as a parameter, uses prevState to add to the current state, and the result will now be set as the current state. 


When something happens synchronously, it means it occurs in a predictable order, one thing after another, in a sequential manner. Think of it like waiting in line at a store—the person in front of you finishes, then it's your turn.

Asynchronous, on the other hand, means things can happen independently of each other and not necessarily in a predetermined order. It's like having multiple tasks running simultaneously, and they may finish at different times, like sending emails while also downloading a file.





The concept of reconciliation is a core algorithm used by React to efficiently update the user interface (UI) in response to changes in component state or props. When a component's state or props change, React needs to determine which parts of the UI need to be updated to reflect these changes.

Here's how the reconciliation process works:

State/Props Change: When the state or props of a component change, React schedules a re-render of the component.
Virtual DOM: React maintains a lightweight, in-memory representation of the DOM known as the Virtual DOM. This virtual representation mirrors the structure of the actual DOM but is faster to manipulate.
Diffing Algorithm: React compares the new virtual DOM tree (resulting from the re-render) with the previous virtual DOM tree (generated from the previous render). This process is known as "diffing."
Identifying Changes: React identifies the differences (or "diffs") between the new and previous virtual DOM trees. It determines which parts of the UI have changed (e.g., new elements, removed elements, updated elements).
Updating the DOM: Based on the identified differences, React updates only the necessary parts of the actual DOM to reflect the changes. This process minimizes the number of DOM manipulations, resulting in better performance.
By using reconciliation, React ensures that the UI stays in sync with the component's state and props, while also optimizing performance by avoiding unnecessary updates to the DOM.

So, when I mentioned the concept of reconciliation in the context of setState, I meant that React uses this algorithm to compare the previous state with the new state and efficiently update the UI accordingly, ensuring that only the necessary parts of the UI are updated.
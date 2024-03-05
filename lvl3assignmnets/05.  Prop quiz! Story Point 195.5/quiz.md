## Questions

1. What do props help us accomplish?

 - Props (short for properties) help us accomplish the passing of data from one component to another in React. They allow components to be customizable and reusable by allowing external data to be injected into them.

2. How do you pass a prop into a component?

 - Props are passed into a component as attributes, similar to how HTML attributes are passed to elements. For example, <MyComponent name="John" /> would pass the prop name with the value "John" into the MyComponent component.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. `<div blahblahblah={true}>`) Why or why not?

 - Yes, you can pass custom props to native DOM elements. React allows you to add custom attributes to HTML elements using JSX. These custom props are then accessible within the component as regular props. However, if the custom prop does not have any effect on the native DOM element (e.g., styling props like className, style), it will be ignored by the browser.

4. How do I receive props in a component?
    
    ```
    function Navbar(props) {
      return (
        <header>
        ...
        </header>
      )
    }
    
    ```
 - In a functional component like the one provided, props are received as the first argument of the component function. In the example given, props is the first parameter of the Navbar function.

5. What data type is `props` when the component receives it?

 - When a component receives props, the props object is typically an object containing key-value pairs, where each key represents a prop name and each value represents the corresponding prop value passed to the component. The data type of props is an object.











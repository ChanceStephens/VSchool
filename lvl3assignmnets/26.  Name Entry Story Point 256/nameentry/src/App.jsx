import React from 'react';
import './App.css';

export default function App() {
  // Initialize formData state with name field empty
  const [formData, setFormData] = React.useState({
    name: '', // Add name to formData state for textbox
    output: '',// Add output to formData state for <h1>Element</h1>
    listName: ''// Add listName to formData state for <li>Element</li>
  });

  // Initialize guestList state as an empty array because the result will be an array of strings as names are added to the list.
  const [guestList, setGuestList] = React.useState([]);

  // Define handleChange function to handle input change
  function handleChange(event) {
    const { name, value } = event.target; 
    // Extract name and value from event target
    // Object destructuring is a feature that allows you to extract properties from objects and assign them to variables with the same names. So, const { name, value } = event.target; extracts the name and value properties from the event.target object and assigns them to variables named name and value respectively.
    // Update formData state by merging previous data with the new name value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  // Define handleSubmit function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission 
    // Add the current name from formData to the guestList
    setGuestList((prevGuestList) => [...prevGuestList, formData.name]);
    // Reset the name field in formData to empty string
    setFormData((prevData) => ({
      ...prevData,
      name: ''
    }));
  }

  return (
    <form onSubmit={handleSubmit}> {/* Add onSubmit event handler */}
      <input
        type='text'
        placeholder='First and Last Name'
        onChange={handleChange} // Call handleChange function on input change
        name='name' // Assign 'name' as the name attribute
        value={formData.name} // Set value to formData.name
      />
      <h1>{formData.name}</h1> {/* Display current name from formData */}
      <button>This is my Submit button</button> {/* Add type='submit' */}
      <ol> {/* Start ordered list */}
        {guestList.map((guest, index) => (
          <li key={index}>{guest}</li> // Display guestList items as list items
        ))}
      </ol>
    </form>
  );
}

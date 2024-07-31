/*==========================================|GLOBAL VARIABLES|==========================================*/

const myToDoForm = document.addToDoItem;                    // Created a Global Variable to access "myToDoForm" Form in HTML directly by name 
const myToDoList = document.myToDoList;                     // Created a Global Variable to access "myToDoList" Form in HTML directly by name
const myOrderedList = document.getElementById('toDoList');  // Created a Global Variable to access the ordered list with in "myToDoList" by its id

const newToDos = {                              // Initialize an object with JSON using key value pairs to store in the database
    title: myToDoForm.title.value,              // Key value pair to store the title in the database
    description: myToDoForm.description.value,  // Key value pair to store the discription in the database
    price: myToDoForm.price.value,              // Key value pair to store the price in the database
    imgUrl: myToDoForm.imgUrl.value,            // Key value pair to store the image in the database
    completed: false                            // Key value pair to store the completion status in the database
};      

const updatedToDos = {      // Initialize an object with JSON using key value pairs with empty strings to use for PUT method
    title: "",              // Set Key value pair for title to empty string
    description: "",        // Set Key value pair for discription to empty string
    price: "",              // Set Key value pair for price to empty string
    imgUrl: "",             // Set Key value pair for image to empty string
    completed: false        // Set Key value pair for completed to empty string
};                

/*==========================================|AXIOS.GET|==========================================*/
function getData() {                                        // Created a function to get data and represent the current task stored in the database
    axios.get('https://api.vschool.io/chancestephensStoryPoint170/todo/')
        .then(response => listToDos(response.data))         // Taking the response and creating the listToDos function with response.data as arguments
        .catch(error => console.log(error))
} 
/*==========================================|DOM CONTENT LOADED LISTENER|==========================================*/
document.addEventListener('DOMContentLoaded', function() {  // Listens for when the page loads and then...
    getData();                                              // Call getData() once the DOM content is loaded

});
/*==========================================|CREATECHECKBOX FUNCTION|==========================================*/
function createCheckbox(id) {
    const checkBox = document.createElement('input');   // Create a new checkbox element
    checkBox.type = 'checkbox';                         // Set the type of the checkbox
    checkBox.checked = false;                           // Set the 'checked' attribute to false
    return checkBox;                                    // Returns the checkbox element
}
/*==========================================|DELETEBUTTON FUNCTION|==========================================*/
function deleteButton(id) {                             // Function to create the delete button                            
    const deleteBtn = document.createElement("button"); // Create a varable for the delete button element
    deleteBtn.textContent = "Delete";                   // Set the text content of the button    
    deleteBtn.name = "delete";                          // Set the name attribute of the button 
    deleteBtn.id = "delete";                            // Set the id attribute of the button
    deleteBtn.addEventListener("click", function() {
        axios.delete(`https://api.vschool.io/chancestephensStoryPoint170/todo/${id}`)
            .then(response => {
                console.log("Item deleted successfully");
                getData();                              // Refresh the list of todos
            })
            .catch(error => console.log(error))
    });
    return deleteBtn;
}
/*==========================================|EDITBUTTON FUNCTION|==========================================*/
function editToSave(event, id , value) {
    console.log(id);
    if (value === 'edit') {                                 // Check if the clicked element is the edit button
        const editBtn = event.target;                       // Get the clicked edit button element
        const textBox = textInput();                        // Create the text box input element
        const saveBtn = saveButton(id, textBox);            // Create the save button element
        const label = editBtn.previousSibling;              // Access the previous sibling element
        const originalLabel = label.innerHTML;              // Create a varable to represent the original text
        editBtn.parentNode.replaceChild(saveBtn, editBtn);  // Replace the edit button with the save button in the DOM
        label.parentNode.replaceChild(textBox, label);      // Replace label with a text box element
        textBox.value = originalLabel                       // Updates the text box value with the original label
    }
}
function editButton(id) {                               // Function to create the edit button
    const editBtn = document.createElement("button");   // Create a variable for the delete button element
    editBtn.textContent = "Edit"                        // Set the text content of the edit button element
    editBtn.name = "edit";                              // Set the name of the edit button element
    editBtn.id = "edit";                                // Set the id of the edit button
    editBtn.addEventListener("click", (event) => editToSave(event, id, editBtn.id));
    return editBtn;                                     // Return the edit button element
}
/*==========================================|SAVEBUTTON FUNCTION|==========================================*/
function saveButton(id, textBox) {                      // Function to create the save button
    const saveBtn = document.createElement("button");   // Create a variable for the save button element
    saveBtn.textContent = "Save"                        // Set the text content of the save button element
    saveBtn.name = "save"                               // Set the name of the save button element
    saveBtn.id = "save";                                // Set the id of the save button element
    function updateDatabase(id, textBox){               // Nested function to update the database
        updatedToDos.title = textBox.value 
    axios.put(`https://api.vschool.io/chancestephensStoryPoint170/todo/${id}`, updatedToDos)
    .then(response => console.log(updatedToDos))        // Taking the response and creating the listToDos function with response.data as arguments
    .catch(error => console.log(error))
    }
    saveBtn.addEventListener('click', function() {
        updateDatabase(id, textBox)})
    return saveBtn;
}
/*==========================================|TEXTINPUT FUNCTION|==========================================*/
function textInput() {
    const textBox = document.createElement("input");
    textBox.type = "text";
    textBox.value = "";
    textBox.name = "toDoItem";
    textBox.id = "toDoItem";
    return textBox
}
/*==========================================|LISTTODOS FUNCTION|==========================================*/
function listToDos(data) {                              // Creates a function "listToDos" with the parameter as data
    myOrderedList.innerHTML = "";                       // Clears the list of items to avoid posting again
    for (let i = 0; i < data.length; i++) {             // iterates over the data from the database
        const li = document.createElement('li');        // Create a new list item element
        const checkBox = createCheckbox();              // Create variable for function call for checkbox element
        const label = document.createElement('label');  // Create a new label element
        const editBtn = editButton(data[i]._id);        // Create variable for function call for edit button element
        const deleteBtn = deleteButton(data[i]._id);    // Create variable for function call for delete button element
        li.appendChild(checkBox);                       // Append the checkbox to the list item
        li.appendChild(label);                          // Append the label to the list item
        li.appendChild(editBtn);                        // Append the edit button to the list item
        li.appendChild(deleteBtn);                      // Append the delete button to list item
        label.textContent = data[i].title;              // Set the label text content to the title of the to-do item                       
        myOrderedList.appendChild(li);                  // Append the list item to the ordered list
    }        
}
getData(); 
/*==========================================|SUBMIT LISTENER: Submit Button "POST"ing to Database |==========================================*/
myToDoForm.addEventListener('submit', function(event) {
    event.preventDefault()
    myToDoForm.title.value = ""                     // Clears the input box after submit event
    axios.post('https://api.vschool.io/chancestephensStoryPoint170/todo/', newToDos)
    .then(response => getData())                  // Processes the getData function. NOTE* Response not used in subsequent code, used to handle promises from Axios
    .catch(error => console.log(error));            // Logs an error message if error occurs 
})
/*==========================================|CHANGE LISTENER: Checkbox Input|==========================================*/
myToDoList.addEventListener('change', function(event) {                         // Listens for a change to "myToDoList"
    const checkboxLabel = event.target.nextElementSibling;                      // Get the label attached to the checkbox
    if (event.target.type === 'checkbox') {                                     // If the event target is a checkbox and...
        if (event.target.checked) {                                             // If checkbox is checked...
            checkboxLabel.innerHTML = `<s>${checkboxLabel.textContent}</s>`;    // Apply strikethrough style to the label's content...
            updatedToDos.completed = true
            axios.put(`https://api.vschool.io/chancestephensStoryPoint170/todo/${id}`, updatedToDos)
            .then(response => console.log(updatedToDos))                        // Taking the response and creating the listToDos function with response.data as arguments
            .catch(error => console.log(error))
        } else {
            checkboxLabel.innerHTML = checkboxLabel.textContent;                // Else remove strikethrough style if checkbox is unchecked
        }
    }
});










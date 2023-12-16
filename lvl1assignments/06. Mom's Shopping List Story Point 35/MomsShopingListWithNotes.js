/*####################################### Mom's Shopping List #################################*/
/*########################################### With Notes ######################################*/
// ****************************Parts***********************************************************//
//     Each part is it's own task. It would be beneficial to have                              //
//     someone look at your code before moving from one part to the next.                      //
// ****************************Part 1**********************************************************//
//     1.  A user will be able to add list items to the pre-built `ul` using the pre-built form//
//     2.  New list items should have the same format as the `li`'s that come with the git repo//
// ****************************Part 2**********************************************************//
//     1.  A user will be able to delete items using an items delete button                    //
// ****************************Extra Credit****************************************************//
//     1.  user will be able to click the "edit" button and see an input box appear            //
//     2.  When the user clicks the "edit" button, a "save" button replace the "edit" button   //
//     3.  The input box will automatically have the value of the list item.                   //
//     4.  The user can edit and "save" the input box's value                                  //
//     5.  On save, the input box will disappear, and the new value will appear                //
//**********************************************************************************************/ 

// Get the form element with the id "add-todo" and the list element with the id "list"
const addItemForm = document.getElementById("add-todo");
const itemList = document.getElementById("list");

// Add a submit event listener to the form
addItemForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input element with the id "title" and its value
  const itemInput = document.getElementById("title");
  const newItemText = itemInput.value;

  // Create a new list item
  if (newItemText !== "") {
    const listItem = document.createElement("li");

    // Create a div element to display the item name
    const itemName = document.createElement("div");
    itemName.textContent = newItemText;

    // Create edit and delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    // Append the elements to the list item
    listItem.appendChild(itemName);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Create an input element for editing
    const newInput = document.createElement("input");

    // Add an event listener to the "edit" button
    editButton.addEventListener("click", function() {
      itemName.remove();

      // Populate the input with the item's text
      newInput.value = itemName.textContent;
      listItem.append(newInput);
      listItem.append(saveEdit);
    });

    // Create a "Save" button for editing
    const saveEdit = document.createElement("button");
    saveEdit.textContent = "Save";

    // Add an event listener to the "Save" button for editing
    saveEdit.addEventListener("click", function() {
      const newName = newInput.value;
      const updateItemName = document.createElement("div");
      updateItemName.textContent = newInput.value;
      listItem.prepend(updateItemName);
      newInput.remove();
      saveEdit.remove();
    });

    // Add an event listener to the "delete" button
    deleteButton.addEventListener("click", function() {
      listItem.remove();
    });

    // Append the new list item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    itemInput.value = "";
  }
});
















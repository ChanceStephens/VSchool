/*########################### Mom's Shopping List #################################*/
/*################################## Clean ########################################*/

const addItemForm = document.getElementById("add-todo");
const itemList = document.getElementById("list");

addItemForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const itemInput = document.getElementById("title");
  const newItemText = itemInput.value;

  if (newItemText !== "") {
    const listItem = document.createElement("li");

    const itemName = document.createElement("div");
    itemName.textContent = newItemText;

    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    listItem.appendChild(itemName);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    const newInput = document.createElement("input");

    editButton.addEventListener("click", function() {
      itemName.remove();

      newInput.value = itemName.textContent;
      listItem.append(newInput);
      listItem.append(saveEdit);
    });

    const saveEdit = document.createElement("button");
    saveEdit.textContent = "Save";
    saveEdit.addEventListener("click", function() {
      const newName = newInput.value;
      const updateItemName = document.createElement("div");
      updateItemName.textContent = newInput.value;
      listItem.prepend(updateItemName);
      newInput.remove();
      saveEdit.remove();
    });

    deleteButton.addEventListener("click", function() {
      listItem.remove();
    });

    itemList.appendChild(listItem);
    itemInput.value = "";
  }
});

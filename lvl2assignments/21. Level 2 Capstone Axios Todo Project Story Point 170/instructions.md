You will be creating a Todo list.

Use the totally rad todo API created by the legendary Bob.(https://coursework.vschool.io/v-schools-todo-api-documentation/)

For the requirements below, you'll be building a frontend site that pulls your list of todos down from the API to display them, and allows the user to perform other CRUD methods on them as well.

For example, when the user adds a new todo, it will also POST that todo to the database using the provided API. This way, once the change is made, it's made permanently. When you refresh the page, since it's pulling from the data on the API, it should pull the current list of todos.

You will do the parts of this assignment in steps. You're encouraged to have someone else look at your code between each step. This will help you to become comfortable talking about code, and might open you up to other ways of doing things. Any suggestions given to you by fellow students should be considered, but don't feel obligated to apply the suggestions you get.

Since you will be needing Axios with a browser to run our JS, we’ll use a [CDN](https://cdnjs.com/libraries/axios).

### **Requirements**

Code and test each of the follow bullet requirements.

### **Part 1 - GET**

### **DONE** - The user can see their current list of todos.
### **DONE** - Todos show up as soon as the page loads.
### **DONE** - If a todo item is complete, it should have a strikethrough line on it
- Images should be displayed as images if there are any

Hints:

A `createTodo` function that takes one todo and inserts it to the DOM is very userfull

Use postman to get those first few todos in there with some images so you can style your list!

## ***Report as Story Point 168.5 (2 Story Points)**

### **Part 2 - POST**

- The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.
### **DONE** - A user should be able to give the item a title.
### **DONE** - A user should be able to give the item a price.
### **DONE** - A user should be able to give the item a description.
### **DONE** - A user should be able to attach an imgUrl to the item

## ***Report as Story Point 170.5 (2 Story Points)**

### **Part 3 - PUT Part 1**

### **DONE** - Each todo will have a checkbox where it can be marked complete or incomplete
- Checking the checkbox should update the database

## ***Report as Story Point 172.5 (2 Story Points)**

### **Part 4 - DELETE**

- A user will be able to delete todos (this is different from marking a todo as "completed")
### **DONE** - Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo

## ***Report as Story Point 174.5 (2 Story Points)**

### **Part 5 - PUT Part 2 (extra credit)**

### **DONE** - Each Todo will have an "edit" button.
### **DONE** - When clicked, the info will change to input boxes that are autofilled with the old Todo data
### **DONE** - A user can change the value of these inputs
### **DONE** - When the "edit" button is clicked, it will change to a "save" button.
### **DONE** - When "save" is clicked, the form will disappear, and the new values will be displayed.
### **DONE** - On save, the todo will be edited in the database.

Read through the "using id" section in the [API documentation](https://www.notion.so/V-School-s-Todo-API-Documentation-9066d3bb43fb4ee98f242d24759fbc35?pvs=21) to learn how to delete items using the item's unique id.

---

# **API Documentation**

Check our [documentation on the V School Todo API](https://www.notion.so/V-School-s-Todo-API-Documentation-9066d3bb43fb4ee98f242d24759fbc35?pvs=21) to learn how to use it.

[V School's Todo API Documentation](https://www.notion.so/V-School-s-Todo-API-Documentation-9066d3bb43fb4ee98f242d24759fbc35?pvs=21)
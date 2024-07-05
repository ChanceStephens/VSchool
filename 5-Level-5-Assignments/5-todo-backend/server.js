// Create endpoints that:







const express = require('express')
const todoApp = express()
const { v4: uuidv4 } = require('uuid')

todoApp.listen(9000, () => {
    console.log("The server is up and running on port 9000, Captain")
})

todoApp.use(express.json())

const myTodos = [
    {
      name: "Complete VSchool Stage 1",
      description: "Finish the 6 levels to be a Certified FSJS Developer",
      imageUrl: "http://www.example.com/image1.jpg",
      completed: false,
      _id: uuidv4()
    },
    {
      name: "Buy groceries",
      description: "Get eggs, milk, bread, and fruits",
      "imageUrl": "http://www.example.com/image2.jpg",
      "completed": false,
      _id: uuidv4()
    },
    {
      name: "Get Oil Changed",
      description: "Truck is at 9000 miles without an Oil Change",
      "imageUrl": "http://www.example.com/image3.jpg",
      "completed": false,
      _id: uuidv4()
    },
    {
      name: "Go for a run",
      description: "Run for 30 minutes in the park",
      "imageUrl": "http://www.example.com/image4.jpg",
      "completed": false,
      _id: uuidv4()
    },
    {
      name: "Fix Faucet",
      description: "Faucet is leaking in bathroom",
      "imageUrl": "http://www.example.com/image5.jpg",
      "completed": false,
      _id: uuidv4()
    }
  ]

todoApp.get("/", (req, res) => {// [x] returns the entire list of todos
    res.send(myTodos)
})     
todoApp.get("/:todoId", (req, res) => {// [x] allows the user retrieve a single todo by its `_id`
    const todoId = req.params.todoId
    const selectedTodo = myTodos.find(todo => todo._id === todoId)
    res.send(selectedTodo)
})     
todoApp.post("/", (req, res) => {// [x] allows new todo items to be posted to the array
    const newTodo = req.body     // [x] When posting a new todo, you must generate a unique id for that todo (consider using the `uuid` npm package),
    newTodo._id = uuidv4()
    myTodos.push(newTodo)                                    
    res.send(`You have added ${newTodo.name} to the log, Captain`)
})    

todoApp.put("/:todoId", (req, res) => {// [x] allows the user to update a todo by its `_id`
    const todoId = req.params.todoId
    const todoIndex = myTodos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(myTodos[todoIndex], req.body)
    res.send(updatedTodo)
})     
todoApp.delete("/:todoId", (req, res) => {// [x] allows the user to delete a todo by its `_id`
    const todoId = req.params.todoId
    const todoIndex = myTodos.findIndex(todo => todo._id === todoId)
    const deletedTodo = myTodos.splice(todoIndex, 1)
    res.send(deletedTodo)
})  

  
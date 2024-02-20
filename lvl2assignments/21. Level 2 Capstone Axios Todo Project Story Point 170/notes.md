HTML Forms ==================================================================================|
https://www.w3schools.com/html/html_forms.asp

HTML Form Attributes ========================================================================|
https://www.w3schools.com/html/html_forms_attributes.asp

HTML Input Types ============================================================================|
https://www.w3schools.com/html/html_form_input_types.asp

HTML Form Elements ==========================================================================|
https://www.w3schools.com/html/html_form_elements.asp

HTML Input Attributes =======================================================================|
https://www.w3schools.com/html/html_form_attributes.asp

HTML Input form* Attributes =================================================================|
https://www.w3schools.com/html/html_form_attributes_form.asp

HTML Ordered Lists ==========================================================================|
https://www.w3schools.com/html/html_lists_ordered.asp

Forms Part 1 Story Point 93.5 ===============================================================|
https://www.notion.so/vschooldesign/Level-2-HTML-CSS-JavaScript-c8ebcae2fabb4772a3ba9320ab2fac80?p=8cec60d201034f679c52ea7f796df261&pm=s

Web Storage Story Point 101.5
https://www.notion.so/vschooldesign/Level-2-HTML-CSS-JavaScript-c8ebcae2fabb4772a3ba9320ab2fac80?p=393c7c8127654179af661b27046a9b7f&pm=s

    Web Storage

    Local Storage
    Session Storage

    JSON - Javascript Object Notation
    JSON.stringify => turning JS into JSON
    JSON.parse => Turns JSON into JS

    Setter - Save data in local storage (key = value pairs)
    localStorage.setItem("name", "steve")
    localStorage.setItem("age", 10)
    localStorage.setItem("isAlive", true)
    localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
    localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC" }))


    Getter
    const name = localStorage.getItem("name")
    const age = localStorage.getItem("age")
    const isAlive = localStorage.getItem("isAlive")
    const friends = JSON.parse(localStorage.getItem("friends"))
    const address = JSON.parse(localStorage.getItem("add"))
    console.log(address)

    Remove
    localStorage.removeItem("age")

    localStorage.dinosaur = "T-rex"
    console.log(undefined)


[GET]

[Scrimba Lesson](https://www.notion.so/vschooldesign/Level-2-HTML-CSS-JavaScript-c8ebcae2fabb4772a3ba9320ab2fac80?p=85a8945590a143ffa286023f97bc8b2b&pm=s)

axios.get("https://api.vschool.io/scrimbalessons/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))



    axios.get("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
    .then(res => console.log(res))
    .catch(err => console.log(err))


[POST]

[Scrimba Lesson](https://www.notion.so/vschooldesign/Level-2-HTML-CSS-JavaScript-c8ebcae2fabb4772a3ba9320ab2fac80?p=370870791c9440d59bf0486fb9a3f00d&pm=s)

    const myToDo = document.myToDo

myToDo.addEventListener("submit", function(event){  //myToDo.addEventListener("submit", handleSubmit) 
    event.preventDefault()
    
    const newTodo = {                               const newTasks = {
        title: myToDo.title.value,                      "title": null, 
        description: myToDo.description.value,          "description": null,
        imgUrl: myToDo.imgUrl.value                     "imgUrl": null, 
    }                                               }
    
    axios.post("https://api.vschool.io/scrimbalessons/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    
})



[DELETE]

[Scrimba Lesson](https://www.notion.so/vschooldesign/Level-2-HTML-CSS-JavaScript-c8ebcae2fabb4772a3ba9320ab2fac80?p=cb75c0f3d5154a6e8d498c8b655e5877&pm=s)

// DELETE request with axios

const button = document.getElementById('delete-button')

button.addEventListener("click", function(){
    axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})


[PUT]

[Scrimba Lesson](https://www.notion.so/vschooldesign/Level-2-HTML-CSS-JavaScript-c8ebcae2fabb4772a3ba9320ab2fac80?p=4e6a926136eb4f488d8e5f775d668dcb&pm=s)

// PUT request with axios

const updates = {
    description: "I CHANGED THE DESCRIPTION!!!"
}

axios.put("https://api.vschool.io/scrimbalessons/todo/5d8bd531ee91575e6d49e06f", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
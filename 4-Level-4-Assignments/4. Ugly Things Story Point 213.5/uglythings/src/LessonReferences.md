axios GET 

- axios.get("https://api.vschool.io/scrimbalessons/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
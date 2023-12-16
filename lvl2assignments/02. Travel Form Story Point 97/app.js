document.addEventListener('submit', function(event) {
  event.preventDefault()  


const form = document.flyerForm
function flyerInput() {
    const firstName = (form.first.value)
    const lastName = (form.last.value)
    const age =(form.age.value)
    const gender = (form.gender.value)
    const dietRestrictions = []
    const destination = (form.destination.value)
        for (let i = 0; i < form.diet.length; i++) {
            if (form.diet[i].checked){
                dietRestrictions.push(form.diet[i].value)
            }
        }   
    alert(` 
    First Name: ${firstName} 
    Last Name: ${lastName} 
    Age: ${age} 
    Gender: ${gender} 
    Diet Restrictions: ${dietRestrictions} 
    Destination: ${destination}`) 
}
flyerInput()
})



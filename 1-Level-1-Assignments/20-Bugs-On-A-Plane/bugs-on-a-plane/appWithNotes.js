document.addEventListener(`DOMContentLoaded`, () => {
    /******************************************************************************************************************************/
//var form = document.getElementByID("arline-form");
const form = document.getElementById("airline-form");
console.log(form);  //=========================>Returns <form id="airline-form">...</form>
/******************************************************************************************************************************/
//var submit = document.getElementByID(submit);
const submit = document.getElementById("submit");
console.log(submit);  //=========================>Returns <button type="button" id="submit">Submit</button>
/******************************************************************************************************************************/
// const query = document.querySelector; 
// console.log(query);  //=========================>Returns No Use For This
/******************************************************************************************************************************/
const formAlert = () => {
//    var firstName = form.elements["firstName"].value;
    let firstName = document.getElementById("first-name");
    let inputFirstName = firstName.value;
    console.log(inputFirstName);//=========================>Returns First Name
/******************************************************************************************************************************/
//    var lastName = form.elements["lastName"].value;
    let lastName = document.getElementById("last-name");
    let inputLastName = lastName.value;
    console.log(inputLastName);//=========================>Returns Last Name
/******************************************************************************************************************************/
//    var age = form.elements["age"].value;
    let age = document.getElementById("age");
    let inputAge = age.value;
    console.log(inputAge);//=========================>Returns Age
/******************************************************************************************************************************/
//    let gender = form.elements["gender"].value;
     genderChoice = document.querySelectorAll('input[name="gender"]');
    console.log(genderChoice);  //=========================>Returns Node List (input#male, input#female, input#meh)
    const gender = () => {
        for (let i = 0; i < genderChoice.length; i++) {
            console.log(genderChoice[i]);   //=========================>Returns User Selected Choice        
            if (genderChoice[i].checked) {
                return genderChoice[i].value;
            }
        }        
    }
    console.log(gender());    //=========================>Returns Selected Choice
/******************************************************************************************************************************/   
//    let location = form.elements["travel-location"].value;
    let travelList = document.querySelector('select[name="travel-location"]');
        console.log(travelList);    //=========================>Returns Select Dropdown List
    let indexTravelList = travelList.selectedIndex;
        console.log(indexTravelList);    //=========================>Returns User Selected Index
    let destination = travelList.options[indexTravelList].text;
        console.log(destination);    //=========================>Returns User Selected Text
/******************************************************************************************************************************/
    // let diet = {};
    // if (form.elements['vegan'].checked) {
    //     let diet.pop(document.getElementById("vegan").value);
    // }
    // if (form.elements['gluten'].checked) {
    //     diet.push(document.getElementById('gluten').value);
    // }
    // if (form.elements['paleo'].checked) {
    //     diet.push(document.getElementById('paleo').value);
    // }
    let diet = document.querySelectorAll('.diet[type="checkbox"]');
        console.log(diet);    //=========================>Returns Node List for diet
    const selectedDiet = () => {
       for (let i = 0; i < diet.length; i++) {
            console.log(diet[i].checked);    //=========================>Returns each Input Element
            if (diet[i].checked === true) {
                return diet[i].value;
            }            
        }     
    }
        console.log(selectedDiet());    //=========================>Function Returns User Selections
    }
    formAlert();
/******************************************************************************************************************************/
//    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    alert(`First Name: ${inputFirstName} \nLast Name: ${inputLastName} \nAge: ${inputAge} \nGender: ${gender()} \nTravel Location: ${destination} \nDiet: ${diet} \nAwesome, now if you die, it won't be an accident..`);
// console.log(alert)

// submit.addEventListener("click", formalert);
submit.addEventListener("click", formAlert);
});
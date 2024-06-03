document.addEventListener(`DOMContentLoaded`, () => {
    const form = document.getElementById("airline-form");
    const submit = document.getElementById("submit");

    const formAlert = () => {
        let firstName = document.getElementById("first-name");
        let inputFirstName = firstName.value;
            

        let lastName = document.getElementById("last-name");
        let inputLastName = lastName.value;

        let age = document.getElementById("age");
        let inputAge = age.value;

        genderChoice = document.querySelectorAll('input[name="gender"]');
        const gender = () => {
            for (let i = 0; i < genderChoice.length; i++) {
                if (genderChoice[i].checked) {
                    return genderChoice[i].value;
                }
            }
        }
        let travelList = document.querySelector('select[name="travel-location"]');
        let indexTravelList = travelList.selectedIndex;
        let destination = travelList.options[indexTravelList].text;

        let diet = document.querySelectorAll('.diet[type="checkbox"]');
        const selectedDiet = () => {
            for (let i = 0; i < diet.length; i++) {
                if (diet[i].checked === true) {
                    return diet[i].value;
                }
            }
        }    
        alert(`First Name: ${inputFirstName} \nLast Name: ${inputLastName} \nAge: ${inputAge} \nGender: ${gender()} \nTravel Location: ${destination} \nDiet: ${selectedDiet()} \nAwesome, now if you die, it won't be an accident..`);
    }
    submit.addEventListener("click", formAlert);
});

    


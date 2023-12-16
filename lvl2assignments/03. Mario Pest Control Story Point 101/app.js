/*==========|  |==========*/ /*TEMPLATE*/
const baddieForm = document.baddieCalculator
/*==========| Number Array of User Input Values |==========*/
const baddiesArray = [0] 
//}  ^  <------} Setting the initial value to 0, allows the reduce method to start  
//}  |  <------} summing the array numbers starting at 0, instead of the first number
//}  |  <------} of the array that is pushed to the array 
/*==========| Event Listener Submit Button|==========*/
document.addEventListener("submit", function(event) {
    event.preventDefault()/*<----{Prevents page from reading initial values and waits for user input}*/

function calculateBaddies() {
    /*==========| <input> Values |==========*/
    const goombaValue = Number(baddieCalculator.goomba.value)
    const bobombValue = Number(baddieCalculator.bobomb.value)
    const cheepValue = Number(baddieCalculator.cheep.value)
    
    const goombaFee = goombaValue * 5
    const bobombFee = bobombValue * 7
    const cheepFee = cheepValue * 11

    let goombaCharge = document.getElementById("goomba")
    let bobombCharge = document.getElementById("bobomb")
    let cheepCharge = document.getElementById("cheep")
    
    const h4Goomba = document.createElement('h4');
    h4Goomba.textContent = `Total Cost of Goombas: $${goombaFee}`;
    goombaCharge.appendChild(h4Goomba);

    const h4Bobomb = document.createElement('h4');
    h4Bobomb.textContent = `Total Cost of Bob-ombs: $${bobombFee}`;
    bobombCharge.appendChild(h4Bobomb);

    const h4Cheep = document.createElement('h4');
    h4Cheep.textContent = `Total Cost of Cheep Cheeps: $${cheepFee}`;
    cheepCharge.appendChild(h4Cheep); 
    
    baddiesArray.push(goombaFee, bobombFee, cheepFee)
    
    
    totalBaddies = baddiesArray.reduce((accumulator, inputValue) => accumulator + inputValue)
    
    let result = document.getElementById("baddieBustedTotal")
    const resultImg = document.createElement("img");
    resultImg.src = 
    result.textContent = `Total Charge for Baddies Caught is $${totalBaddies}`;
    
    
    baddieCalculator.goomba.value = "";
    baddieCalculator.bobomb.value = "";
    baddieCalculator.cheep.value = "";
    
}

calculateBaddies();
});



    




    

    



      

// const additionForm = document.addition

//     function add() {          
//                 const addition = document.addition;
//                 const variableA = Number(addition.variableA.value);
//                 const variableB = Number(addition.variableB.value);
//                 const result = variableA + variableB;
//                 const h4 = document.createElement('h4');        
//                 h4.textContent = `${variableA} + ${variableB} = ${result}`
//                 document.getElementsByName("addition")[0].append(h4);
//                 addition.variableA.value = ""
//                 addition.variableB.value = ""    
//         }
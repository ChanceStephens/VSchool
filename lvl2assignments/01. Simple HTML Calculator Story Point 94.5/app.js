

const additionForm = document.addition

    function add() {          
                const addition = document.addition;
                const variableA = Number(addition.variableA.value);
                const variableB = Number(addition.variableB.value);
                const result = variableA + variableB;
                const h4 = document.createElement('h4');        
                h4.textContent = `${variableA} + ${variableB} = ${result}`
                document.getElementsByName("addition")[0].append(h4);
                addition.variableA.value = ""
                addition.variableB.value = ""    
        }

additionForm.addEventListener("submit", function(event) {
    event.preventDefault()
    add()
})

const subtractionForm = document.subtraction   

function subtract() {         
                const subtraction = document.subtraction;
                const variableA = Number(subtraction.variableA.value);
                const variableB = Number(subtraction.variableB.value);
                const result = variableA - variableB;
                const h4 = document.createElement('h4');        
                h4.textContent = `${variableA} - ${variableB} = ${result}`
                document.getElementsByName("subtraction")[0].append(h4);
                subtraction.variableA.value = ""
                subtraction.variableB.value = "" 
        }
subtractionForm.addEventListener("submit", function(event) {
    event.preventDefault()
    subtract();
})        

const mulitplicationForm = document.multiplication

        function multiply() {   
                const multiplication = document.multiplication;
                const variableA = Number(multiplication.variableA.value);
                const variableB = Number(multiplication.variableB.value);
                const result = variableA * variableB;
                const h4 = document.createElement('h4');        
                h4.textContent = `${variableA} x ${variableB} = ${result}`
                document.getElementsByName("multiplication")[0].append(h4);
                multiplication.variableA.value = ""
                multiplication.variableB.value = ""            
        }

        mulitplicationForm.addEventListener("submit", function(event) {
            event.preventDefault()
            multiply();
        })
            

 



//DOM DEBUG Story Point 32.5


const colors = ["red", "blue", "green"];  // Colors to Choose From

document.getElementById("add").addEventListener("click", function(e){ // change onClick to click
    const subItem = createSubItem(e)
    document.getElementById("list").style.backgroundColor = "red"; // changes bkgrnd clr of list element
    document.getElementById("list").appendChild(subItem)    
})

function createSubItem(e){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input");
    subItem.textContent = subItemValue.value; // .value added to add user input to list
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")    
    return subItem
}

function createDropDown(){
    const dropDown = document.createElement("select") //creates dropdown to select colors
    dropDown.setAttribute("id", "subItemBackgroundColor")
    dropDown.style.backgroundColor = "honeyDew";    
   
    for (let i = 0; i < colors.length; i++){  // added .length  refers to the array
        const option = document.createElement("option") // added "document."
              option.innerHTML = colors[i];
              option.value = colors[i];
              dropDown.append(option) //moved here, below text and value due to how JS reads the code.
    }
    dropDown.addEventListener("change", function(e){       
        e.target.parentElement.style.backgroundColor = e.target.value  // edited from parent to parentElement.style
    })
    return dropDown
}


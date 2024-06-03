//           /*Employee Records Story Point 51.5*/
       
//      **A bigger picture**
// These functions mimic classes, which is a pattern from more object oriented programming languages.
// In React, you will use classes to help instantiate instance "components" on the DOM. One of these components 
//  could be a post. Each post needs a title, maybe some text, and probably some methods to help with editing or deleting it.

//      **If you get stuck**
// If you haven't done a focused session attempting the above requirements, these next few tips won't be that useful.
// The syntax for default parameters look like you're assigning the parameter a value. This will only be the value if an argument gets passed in.
// Think about why default parameters would need to go at the end of the parameter list, after any parameters that would need required values to be passed as arguments.

//            //*Exercise Instructions*/
//****************  You are to create a collection of employee's information for your company. Each employee has the following attributes:
//              1. Name
//              2. Salary
//              3. Job title
//              4. Status

//****************  First, you will create an empty array named `employees` ******************************************************************
//Step 1: Created an empty array to store employee information.###############################################################################  
var employees = [];

//****************  Next, you will create an `Employee` constructor with the first three 
//                    attributes defined at the time of instantiation and the fourth will 
//                    be defaulted to `"Full Time"`.******************************************************************************************
//################  Step 2: Define an Employee constructor function.##########################################################################
function Employee(name, salary, jobTitle, status = "Full Time") {

//################  Step 3: Assign properties to the created employee object.#################################################################  
    this.name = name;          // Assign the employee's name.
    this.salary = salary;      // Assign the employee's salary.
    this.jobTitle = jobTitle;  // Assign the employee's job title.
    this.status = status;      // Assign the employee's status (defaults to "Full Time" if not provided).

//****************  This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.
//                    (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)*****************************
//################  Step 4: Define a method named printEmployeeForm.##########################################################################
    this.printEmployeeForm = function () {

//################  Step 5: Return the employee's information as a string and push it into the employees array.############################### 
        return employees.push("Name: " + this.name + ", Salary: " + this.salary + ", Job Title: " + this.jobTitle + ", Status: " + this.status);
    }
    this.printEmployeeForm();
}
//*****************  You will then: **********************************************************************************************************

//*****************  1. Instantiate three employees*******************************************************************************************
//*****************  2. Override the status attribute of one of them to either "Part Time" or "Contract"**************************************
//*****************  3. Call the `printEmployeeForm` method for each employee (this was done within the constructor function)*****************
//################  Step 6: Create three instances of the Employee object with different details.#############################################    
var ben = new Employee("Ben Dover", "$60,000", "Lead Custodian");
var justin = new Employee("Justin Case", "$125,000", "Director of Human Resources");
var sue = new Employee("Sue Flay", "$95,000", "Head Chef", "Contracted");
//*****************  4. Put the generated employees into the `employees` array using whichever method you prefer.*****************************
//################  Step 7: Display the contents of the employees array to the console.####################################################### 
console.log(employees);

/*********************OUTPUT******************************************************************************************************************/
// [Running] node "/home/chance/lvl1Vschool/lvl1assignments/14. Employee Records Story Point 51.5/tempCodeRunnerFile.js"
// [
//   'Name: Ben Dover, Salary: $60,000, Job Title: Lead Custodian, Status: Full Time',
//   'Name: Justin Case, Salary: $125,000, Job Title: Director of Human Resources, Status: Full Time',
//   'Name: Sue Flay, Salary: $95,000, Job Title: Head Chef, Status: Contracted'
// ]

// [Done] exited with code=0 in 0.04 seconds


{//Here's a refresher for the constructor syntax. Attempt writing yours without using the following code:
/*
```jsx
function Car (year, make, model) {
    // use the "this" keyword to reference each object
    // that is created from this constructor
    this.year = year;
    this.make = make;
    this.model = model;
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

var myTacoma = new Car(2015, "Toyota", "Tacoma");

```
*/
}
{           /* SCRIMBA EXAMPLE*/
// function Car(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }

// var jeep = new Car("Jeep", "Cherokee", 1995)

// console.log(jeep)

//***EACH PIECE BROKEN DOWN */
//function Car(make, model, year) {  
//       "Car" is a constructor function for creating Car objects.
//       "make," "model," and "year" are parameters passed to the constructor function.

//    this.make = make;
//    this.model = model;  
//    this.year = year;       
//       "this.make" "this.model" "this.year" are properties of the Car object, representing the car's make, model, and year.
//       "make" "model" "year"is the parameter value that will be assigned to this property.
//}
//var jeep = new Car("Jeep", "Cherokee", 1995);  
//       "jeep" is a variable that will store an instance of a Car object.
//       "new" keyword is used to create a new instance of the "Car" constructor.
//       "Car" is the constructor function used to create the object.
//       "("Jeep", "Cherokee", 1995)" are the values passed as arguments to the constructor's parameters.
}
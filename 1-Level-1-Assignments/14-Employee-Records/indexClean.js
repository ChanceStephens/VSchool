
var employees = [];

function Employee(name, salary, jobTitle, status = "Full Time") {
    this.name = name;         
    this.salary = salary;     
    this.jobTitle = jobTitle;  
    this.status = status;
    this.printEmployeeForm = function () {
        return employees.push("Name: " + this.name + ", Salary: " + this.salary + ", Job Title: " + this.jobTitle + ", Status: " + this.status);
    }
    this.printEmployeeForm();
    
}
var ben = new Employee("Ben Dover", "$60,000", "Lead Custodian");
var sue = new Employee("Sue Flay", "$95,000", "Head Chef", "Contracted");
var justin = new Employee("Justin Case", "$125,000", "Director of Human Resources");

console.log(employees)

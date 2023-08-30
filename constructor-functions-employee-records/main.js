//constructor function employee records exercise
//(A) This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

var employees = [];

function Employee(name, jobtitle, salary, status){
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log("Employee Info: " + this.name + ", " + this.jobtitle + ", " + this.salary + ", "+ this.status);
    };
    }

    

let Employee1 = new Employee("Mark", "Engineer", "300k")
let Employee2 = new Employee("James", "COO", "200K")
let Employee3 = new Employee("Luke","Janitor", "900k")

//Call the printEmployeeForm method for each employee

Employee1.printEmployeeForm()
Employee2.printEmployeeForm()
Employee3.printEmployeeForm() 

//Override the status attribute of one of them to either "Part Time" or "Contract"

Employee1.status = "part time"

//console.log(Employee1)

//Put the generated employees into the employees array using whichever method you prefer.

//console.log(employees)


function put(array,array,array){
     employees.push(array,array,array);
    return console.log(employees)
}

put(Employee1, Employee2, Employee3)

console.log(employees)
// complete this js code
function Person(name, age) {
	  // Define the Person class inside the function
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  // Return an instance of PersonClass
  return new PersonClass(name, age);
}

function Employee(name, age, jobTitle) {
	  // Define the Employee class inside the function
  class EmployeeClass extends Person(name, age).constructor {
    constructor(name, age, jobTitle) {
      super(name, age);
      this.jobTitle = jobTitle;
    }

    jobGreet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
  }

  // Return an instance of EmployeeClass
  return new EmployeeClass(name, age, jobTitle);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

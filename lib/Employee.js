const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");


class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';

  }

  getName() {
  console.log(`This is name: ${this.name}`);
  }

  getId() {
  console.log(`This is ID: ${this.id}`);
  }

  getEmail() {

  }

  getRole() {
   return this.role;
  }
}


module.exports = Employee;
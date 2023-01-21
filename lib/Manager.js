// const inquirer = require("inquirer");
const Employee = require('./Employee');


class Manager extends Employee{
    constructor(name, id, email, role) {
      super(name, id, email, role)
      this.role = 'Manager';
      this.officeNumber = officeNumber;
   }
}

const manager = new Manager();

manager.getName();

manager.getId();

manager.getEmail();

manager.getRole();

manager.getOfficeNumber();


module.exports = Manager;
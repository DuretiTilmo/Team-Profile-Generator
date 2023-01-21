// const inquirer = require("inquirer");
const Employee = require('./Employee');


class Intern extends Employee{
    constructor(name, id, email, role) {
        super(name, id, email, role)
        this.role = 'Intern';
        this.school = school;
   }
}




const intern = new Intern();

intern.getName();

intern.getId();

intern.getEmail();

intern.getRole();

intern.getScool();


module.exports = Intern;
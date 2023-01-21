// const inquirer = require("inquirer");
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role) {   
     super(name, id, email, role)
     this.role = 'Engineer';
     this.github = github;

}


getName() {
    let engineer = new Engineer(this.name);
    return engineer
};

getId() {
    let engineer = new Engineer(this.id);
    return engineer
};

getEmail() {
    let engineer = new Engineer(this.email);
    return engineer
};

getRole() {
    let engineer = new Engineer(this.role);
    return engineer
};

getGithub() {
    let engineer = new Engineer(this.github);
    return engineer
};

}
module.exports = Engineer;
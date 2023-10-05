const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(name, id, email, role);
    this.role = role;
    this.school = school;
  }

  getRole() {
    return this.role;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;

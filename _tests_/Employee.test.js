const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("function test", () => {
    it("It should return the values when the functions are called", () => {
      const employee = new Employee("Sarah", 12, "sarah@gmail.com", "Employee");

      expect(employee.getName()).toEqual("Sarah");
      expect(employee.getEmail()).toEqual("sarah@gmail.com");
      expect(employee.getId()).toEqual(12);
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});

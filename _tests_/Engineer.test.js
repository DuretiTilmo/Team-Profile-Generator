const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("function test", () => {
    it("It should return the values when the functions are called", () => {
      const engineer = new Engineer(
        "Ali",
        23,
        "ali@gmail.com",
        "aligit",
        "Engineer"
      );

      expect(engineer.getName()).toEqual("Ali");
      expect(engineer.getEmail()).toEqual("ali@gmail.com");
      expect(engineer.getId()).toEqual(23);
      expect(engineer.getGithub()).toEqual("aligit");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});

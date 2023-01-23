const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("function test", () => { 
        it("It should return the values when the functions are called", () => {
            const manager = new Manager("Dure", 43, "dure@gmail.com", 5678, "Manager");
             
            expect(manager.getName()).toEqual("Dure");
            expect(manager.getEmail()).toEqual("dure@gmail.com");
            expect(manager.getId()).toEqual(43);
            expect(manager.getOfficeNumber()).toEqual(5678);
            expect(manager.getRole()).toEqual("Manager");
         
        })
        })
    })
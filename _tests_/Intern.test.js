const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("function test", () => { 
        it("It should return the values when the functions are called", () => {
            const intern = new Intern("Anna", 88, "anna@gmail.com", "uwcollege", "Intern");
             
            expect(intern.getName()).toEqual("Anna");
            expect(intern.getEmail()).toEqual("anna@gmail.com");
            expect(intern.getId()).toEqual(88);
            expect(intern.getSchool()).toEqual("uwcollege");
            expect(intern.getRole()).toEqual("Intern");
         
        })
        })
    })



const inquirer  = require("inquirer");
const { writeFile } = require('fs').promises;
const generateHTML = require("./src/generateHTML.js");
// const generateManager = require("./src/generateManager.js");
// const generateEngineer = require("./src/generateEngineer.js");
// const generateIntern = require("./src/generateIntern.js");

 const Manager = require("./lib/Manager.js");
 const Engineer = require("./lib/Engineer.js");
 const Intern = require("./lib/Intern.js");
 let choice='';

const promptManager = () => { 
   return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager\'s name?',
      validate: (value) => {
        if (value) {
          return true;
        } else
        return "Please enter team manager\'s name?";
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team manager\'s id?',
      validate: (value) => {
        if (isNaN(value)) {
          return "Please enter a number";
        }else
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager\'s email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager\'s office number?',
      validate: (value) => {
        if (isNaN(value)) {
          return "Please enter a number";
        }else
        return true;
      }
    },
    {
      type: 'list',
      name: 'member',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
    },
  ]);
};

//===============================================================//
    const promptEngineer = () => { 
      return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineer\'s name?',
      validate: (value) => {
        if (value) {
          return true;
        } else
        return "Please enter team engineer\'s name?";
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineer\'s id?',
      validate: (value) => {
        if (isNaN(value)) {
          return "Please enter a number";
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineer\'s email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s github?',
    },
    {
      type: 'list',
      name: 'member',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
    },
  ]) 
  } 
//==============================================================//
   const promptIntern = () => { 
      return inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your intern\'s name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your intern\'s id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your intern\'s email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is your intern\'s school?',
      },
      {
        type: 'list',
        name: 'member',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
      },
    ]) 
  }

  const init = () => {   
    promptManager()
      .then((data) => {
        const { name, id, email, officeNumber,member} = data;
    
        const manager= new Manager(name, id, email, officeNumber,"Manager");
        // writeFile('index.html', generateHeader())
            writeFile('index.html', generateHTML(manager))
        // console.log(manager);
        choice = member;
        // console.log(choice);      
        }
      )
      .then(() => {
        if(choice=="Intern") {
          printIntern();
        }else if(choice =="Engineer"){
         printEngineer();
        }else{
        // generateFooter();
        }          
      })

      .catch((err) => console.error(err));         
  };

  const printEngineer= () => {
         promptEngineer()
                .then((data) => {
                 const { name, id, email, github,member} = data;
                 const engineer=new Engineer(name, id, email, github,"Engineer");
                 writeFile('index.html', generateHTML(engineer))
                 choice = member;
                // console.log(engineer);
                // console.log(member);         
                } )  
                .then(() => {
                  if(choice=="Intern") {
                    printIntern()
                  }else if(choice=="Engineer") {
                    printEngineer();
                  }else{
                  //  generateFooter();
                  }      
                })    
  }

  const printIntern= () => {
    promptIntern()
           .then((data) => {
            const { name, id, email, school,member} = data;
            const intern = new Intern(name, id, email, school,"Intern");
               writeFile('index.html', generateHTML(intern))
            choice = member;
          //  console.log(intern);
          //  console.log(member);         
           } )  
           .then(() => {
             if(choice=="Intern") {
               printIntern();
             }else if(choice =="Engineer"){
              printEngineer();
             }else{
            //  generateFooter();
             }       
           })    
}

 init();


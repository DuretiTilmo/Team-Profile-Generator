function generateHTML() {
    let text = [];
    // const { name, id, email, officeNumber, school, github} = data;
   return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="./assets/style.css"/>
      <title>My Team</title>
  </head>
  <body>
       <header>
                  <h1>My Team</h1>
        </header>`

      function generateManager() {
 
        let managerCard =  `<main>
        <div class="card manager">
              <div class="card-header">
                  <h2>${name} </h2>
                  <h3 class = "card"><i class="fa-solid fa-glasses-round"></i>Manager</h3>
              </div>
              <div class="card-body">
                  <ul class="list">
                      <li class="list-item">${id}</li>
                      <li class="list-item">${email}</li>
                      <li class="list-item">${officeNumber}</li>
                  </ul>
              </div>
          </div>`
    
          text.push(managerCard);
        }

function generateEngineer() { 

    let engineerCard = `<div class="card engineer">
    <div class="card-header">
        <h2>${name} </h2>
        <h3 class = "card"><i class="fa-solid fa-glasses-round"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list">
            <li class="list-item">${id}</li>
            <li class="list-item">${email}</li>
            <li class="list-item">${github}</li>
        </ul>
    </div>
</div>
`
text.push(engineerCard)
}
        
function generateIntern(){ 

    let internCard = `<div class="card intern">
    <div class="card-header">
        <h2>${name} </h2>
        <h3 class = "card"><i class="fa-solid fa-glasses-round"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list">
            <li class="list-item">${id}</li>
            <li class="list-item">${email}</li>
            <li class="list-item">${school}</li>
        </ul>
    </div>
    </div>
    </main>
    </body>
      </html> `
    
    text.push(internCard);
    }


}

module.exports = generateHTML;
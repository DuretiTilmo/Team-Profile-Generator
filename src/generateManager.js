function generateManager(manager) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="./dist/style.css" />
        <title>My Team</title>
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <div class="card manager">
          <div class="card-header">
              <h2>${manager.name} </h2>
              <h3 class = "card"><i class="fa-solid fa-glasses-round"></i>Manager</h3>
          </div>
          <div class="card-body">
              <ul class="list">
                  <li class="list-item">${manager.id}</li>
                  <li class="list-item">${manager.email}</li>
                  <li class="list-item">${manager.officeNumber}</li>
              </ul>
          </div>
      </div>
      `;
}

module.exports = generateManager;

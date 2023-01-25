function generateManager(manager) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css" />
  <title>My Team</title>
</head>
  <body>
  <header>
    <h1>My Team</h1>
  </header>
  <div class = "container"> 
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">
       <div class="card manager">
        <div class="card-header">
            <h2>${manager.name} </h2>
            <h3><i class="fa fa-coffee" style="font-size: 25px"></i>  Manager</h3>
        </div>
      <div class="card-body mx-0 px-0">
          <ul>
            <li class = "list-item">ID: ${manager.id}</li>	
            <li class = "list-item">Email: <span><a href = "mailto:${manager.email}"> ${manager.email}</a> </span></li>
            <li class = "list-item">Office Number: ${manager.officeNumber}</li>
          </ul>
      </div>
    </div>
    </div>`;
}

module.exports = generateManager;

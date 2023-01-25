function generateEngineer(engineer) {
  return `
  <div class="col-lg-4 col-md-6 col-sm-12">
  <div class="card engineer">
 <div class="card-header">
    <h2>${engineer.name} </h2>
    <h3><i class="fa fa-laptop" style="font-size:25px"></i>  Engineer</h3>
 </div>
  <div class="card-body mx-0 px-0">
      <ul>
         <li class = "list-item">ID: ${engineer.id}</li>	
         <li class = "list-item">Email: <span><a href = "mailto:${engineer.email}"> ${engineer.email}</a> </span> </li>
         <li class = "list-item">Github: <a traget="_blank" href="https://github.com/DuretiTilmo">${engineer.github}</a> </li>
       </ul>
   </div>
 </div>
</div>
`;
}

module.exports = generateEngineer;

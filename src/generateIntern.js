function generateIntern(intern) {
  return `<div class="col-lg-4 col-md-6 col-sm-12">
  <div class="card intern">
 <div class="card-header">
      <h2>${intern.name} </h2>
      <h3><i class="fa fa-mortar-board" style="font-size:25px"></i>  Intern</h3>
 </div>
    <div class="card-body mx-0 px-0">
     <ul>
        <li class = "list-item">ID: ${intern.id}</li>	
        <li class = "list-item">Email: <span><a href = "mailto:${intern.email}"> ${intern.email}</a> </span></li>
        <li class = "list-item">School: ${intern.school}</li>
     </ul>
    </div>
   </div>
  </div>
`;
}
module.exports = generateIntern;

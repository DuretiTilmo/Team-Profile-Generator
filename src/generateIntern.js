function generateIntern(intern) {
  return `<div class="card intern">
<div class="card-header">
    <h2>${intern.name} </h2>
    <h3 class = "card"><i class="fa-solid fa-glasses-round"></i>Intern</h3>
</div>
<div class="card-body">
    <ul class="list">
        <li class="list-item">${intern.id}</li>
        <li class="list-item">${intern.email}</li>
        <li class="list-item">${intern.school}</li>
    </ul>
</div>
</div>
`;
}
module.exports = generateIntern;

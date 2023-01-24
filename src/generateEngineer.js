function generateEngineer(engineer) {
  return `<div class="card engineer">
    <div class="card-header">
        <h2>${engineer.name} </h2>
        <h3 class = "card"><i class="fa-solid fa-glasses-round"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list">
            <li class="list-item">${engineer.id}</li>
            <li class="list-item">${engineer.email}</li>
            <li class="list-item">${engineer.github}</li>
        </ul>
    </div>
</div>
`;
}

module.exports = generateEngineer;

const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((e) => e.id === id);
  const firstRespId = employee.responsibleFor[0];
  const firstRespSpecies = data.species.find((specie) =>
    specie.id === firstRespId);
  const animal = firstRespSpecies.residents.reduce((acc, curr) => {
    if (curr.age > acc.age) return curr;
    return acc;
  });
  const { name, sex, age } = animal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

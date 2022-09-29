const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const infoSpecie = data.species.find((specie) => specie.name === animal);
  return infoSpecie.residents.every((residente) => residente.age >= age);
}

module.exports = getAnimalsOlderThan;

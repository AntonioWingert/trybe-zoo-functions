const data = require('../data/zoo_data');

const allAnimals = () => {
  const object = {};
  data.species.forEach((actual) => { object[actual.name] = actual.residents.length; });
  return object;
};

function countAnimals(animal) {
  if (animal === undefined) return allAnimals();
  const { specie, sex } = animal;
  const especiesD = data.species.find((actualAnimal) => actualAnimal.name === specie);
  if (sex !== undefined) {
    const residentsSex = especiesD.residents.filter((actualResident) => actualResident.sex === sex);
    return residentsSex.length;
  }
  return especiesD.residents.length;
}

module.exports = countAnimals;

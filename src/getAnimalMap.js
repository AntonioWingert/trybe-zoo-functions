const data = require('../data/zoo_data');

function getAnimalsOfAZone(zone) {
  const speciesOfZone = data.species.filter((species) =>
    species.location === zone);
  return speciesOfZone;
}

function getResidentsOfSpecies(species) {
  const object = {
    species: species.name,
    all: [],
    male: [],
    female: [],
  };
  species.residents.forEach((residents) => {
    object.all.push(residents.name);
    if (residents.sex === 'male') object.male.push(residents.name);
    if (residents.sex === 'female') object.female.push(residents.name);
  });
  return object;
}

function noParam(object) {
  Object.keys(object).forEach((zone) => {
    const speciesOfZone = getAnimalsOfAZone(zone);
    speciesOfZone.forEach((spe) => object[zone].push(spe.name));
  });
  return object;
}

function sortObject(object) {
  Object.keys(object).forEach((zone) => {
    object[zone].forEach((animal) => {
      animal[Object.keys(animal)[0]]
        .sort((a, b) => a.localeCompare(b));
    });
  });
  return object;
}

function insertNames(sex, specieData) {
  const names = {};
  if (sex === 'male') names[specieData.species] = specieData.male;
  if (sex === 'female') names[specieData.species] = specieData.female;
  if (!sex) names[specieData.species] = specieData.all;
  return names;
}

function auxFunction(object, sex) {
  Object.keys(object).forEach((zone) => {
    const speciesOfZone = getAnimalsOfAZone(zone);
    speciesOfZone.forEach((specie) => {
      const specieData = getResidentsOfSpecies(specie);
      object[zone].push(insertNames(sex, specieData));
    });
  });
}
function getAnimalMap(options) {
  const object = { NE: [], NW: [], SE: [], SW: [] };
  if (!options) return noParam(object);
  const { sex, sorted, includeNames } = options;
  if (!includeNames) return noParam(object);
  if (includeNames) auxFunction(object, sex);
  if (sorted) sortObject(object);
  return object;
}

module.exports = getAnimalMap;

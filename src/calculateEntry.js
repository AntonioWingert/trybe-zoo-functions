const data = require('../data/zoo_data');

function auxAge(age) {
  let arrAge = '';
  switch (true) {
  case age < 18:
    arrAge = 'child';
    break;
  case age >= 18 && age < 50:
    arrAge = 'adult';
    break;
  default:
    arrAge = 'senior';
  }
  return arrAge;
}

function countEntrants(entrants) {
  const entries = {};
  entrants.forEach((person) => {
    const { age } = person;
    const arrAge = auxAge(age);
    if (Object.keys(entries).includes(arrAge)) {
      entries[arrAge] += 1;
    } else {
      entries[arrAge] = 1;
    }
  });
  return entries;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const arrEntrances = countEntrants((entrants));
  return Object.keys(arrEntrances).reduce((acc, curr) =>
    acc + ((arrEntrances[curr] * data.prices[curr])), 0);
}

module.exports = { calculateEntry, countEntrants };

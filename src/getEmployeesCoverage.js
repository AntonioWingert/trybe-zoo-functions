const data = require('../data/zoo_data');

function validateId(id) {
  if (!data.employees.some((e) => e.id === id)) {
    throw new Error('Informações inválidas');
  }
  return true;
}

function validateName(name) {
  if (!data.employees.some((e) => e.firstName === name || e.lastName === name)) {
    throw new Error('Nome inválido');
  }
  return true;
}

function objCreate({ id: objId, firstName: objFN,
  lastName: objLN, responsibleFor: objRPS }) {
  const newObject = {
    id: objId,
    fullName: `${objFN} ${objLN}`,
    species: objRPS.map((e) =>
      data.species.find((e2) => e2.id === e).name),
    locations: objRPS.map((e) =>
      data.species.find((e2) => e2.id === e).location),
  };
  return newObject;
}

function getEmployeesCoverage({ name: empName, id: empId } = 0) {
  if (!empName && !empId) {
    const newArray = [];
    data.employees.forEach((element) => newArray.push(objCreate(element)));
    return newArray;
  } if (empName && !empId) {
    validateName(empName);
    const employeeObject = data.employees.find((e) =>
      e.firstName === empName || e.lastName === empName);
    return objCreate(employeeObject);
  }
  validateId(empId);
  const employeeObject = data.employees.find((e) => e.id === empId);
  return objCreate(employeeObject);
}
module.exports = getEmployeesCoverage;

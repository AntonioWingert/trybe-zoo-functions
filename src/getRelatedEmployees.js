const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers)
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };

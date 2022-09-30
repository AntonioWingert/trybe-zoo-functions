const data = require('../data/zoo_data');

const operatingHours = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Tuesday')).map((e) => e.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Wednesday')).map((e) => e.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Thursday')).map((e) => e.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Friday')).map((e) => e.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Saturday')).map((e) => e.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species.filter((day) =>
      day.availability.includes('Sunday')).map((e) => e.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget = 0) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (data.species.find((e2) => e2.name === scheduleTarget)) {
    return data.species.find((e) => e.name === scheduleTarget).availability;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const newObject = {};
    newObject[scheduleTarget] = {
      officeHour: `Open from ${data.hours[scheduleTarget].open}am until ${
        data.hours[scheduleTarget].close}pm`,
      exhibition: data.species.filter((e) =>
        e.availability.includes(scheduleTarget)).map((e) => e.name),
    };
    return newObject;
  }
  return operatingHours;
}

module.exports = getSchedule;

/**
  * Функция генерации отчета по рейсу
  *
  *  * проверка рейса
  *  * подсчет
  *
  * @param {string} flight номер рейса
  * @param {number} nowTime текущее время
  * @returns {Report} отчет
*/
function flightReport(flight, nowTime) {
  flight = flights[flight];

  if (!flight)
    throw new Error('Flight not found');

  const registration = nowTime >= flight.registrationStarts && nowTime < flight.registrationEnds;

  const registeredSeats = flight.tickets.filter(item => item.registrationTime !== null).length;

  console.log(registeredSeats)
  /**
    * @type {Report}
  */
  const report = {
    flight: flight.name,
    registration: registration,
    complete: nowTime > flight.registrationEnds,
    countOfSeats: flight.seats,
    reservedSeats: flight.tickets.length,
    registeredSeats,
  }

  return {
    ...report,
    message: 'Actual report about flight'
  }
}

console.table(flightReport('BH118', Date.now()));

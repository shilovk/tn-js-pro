'use strict';

/**
 * Функция генерации отчета по рейсу
 *
 * Отчет строится на основании данных, содержащихся в параметре flight
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {World} world
 * @param {string} flightNumber номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(world, flightNumber, nowTime) {
  const flight = world.flights[flightNumber];
  if (!flight)
    throw new Error('Flight not found');

  const registration = nowTime >= flight.registrationStarts && nowTime < flight.registrationEnds;

  const registeredSeats = flight.tickets.filter(item => item.registrationTime !== null).length;

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

// console.table(flightReport(bigWorld, 'BH118', Date.now()));

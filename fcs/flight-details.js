'use strict';

/**
 * Вывод информации о рейсе
 * @param {World} world мир
 * @param {string} flightName название рейса
 */
function flightDetails(world, flightName) {
  // if (typeof world !== 'World') throw new Error('World is not correct');

  if (typeof flightName !== 'string') throw new Error('Flight name is not a string');

  const flight = world.flights[flightName];
  if (!flight)
    throw new Error('Flight not found');

  const report = flightReport(world, flightName, Date.now());

  const container = document.createElement('div');
  container.id = 'flight-details';
  container.append(showFlight(flight));
  container.append(showTickets(flight.tickets));

  document.body.append(container);
};

/**
 * Вывод информации о рейсе
 * @param {Flight} flight рейс
 * @returns {HTMLelement} div с информацией о рейсе
 */
function showFlight(flight) {
  let info = [];
  info.push({ field: 'name', value: flight.name });
  info.push({ field: 'seats', value: flight.seats });
  info.push({ field: 'business seats', value: flight.businessSeats });
  info.push({ field: 'registration starts', value: ruDate(flight.registrationStarts) });
  info.push({ field: 'registration ends', value: ruDate(flight.registrationEnds) });

  const container = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = 'Flight information';
  container.append(title);

  info.forEach(data => {
    const el = document.createElement('p');
    el.textContent = `${data.field}: ${data.value}`;
    container.append(el);
  });
  return container;
};

/**
 * Вывод информации о билетах
 * @param {Ticket[]} tickets билеты
 * @returns {HTMLelement} div с информацией о билетах
 */
function showTickets(tickets) {
  const container = document.createElement('div');
  const title = document.createElement('h3');
  title.textContent = 'Tickets';
  container.append(title);

  tickets.forEach(ticket => {
    container.append(showTicket(ticket));
  });
  return container;
};

/**
 * Вывод информации о билете
 * @param {Ticket[]} tickets билеты
 * @returns {HTMLelement} div с информацией о билете
 */
function showTicket(ticket) {
  let info = [];
  info.push({ field: 'number', value: ticket.id });
  info.push({ field: 'seat', value: ticket.seat });
  info.push({ field: 'full name', value: ticket.fullName });
  info.push({ field: 'registration time', value: ticket.registrationTime });
  const container = document.createElement('div');

  info.forEach(data => {
    const el = document.createElement('p');
    el.textContent = `${data.field}: ${data.value}`;
    container.append(el);
   });
  return container;
};

/**
 * Русский формат времени
 * @param {string} time время
 */
function ruDate(time) {
  return new Date(time).toLocaleString('ru');
}

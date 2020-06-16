'use strict';

/**
 * Вывод информации о рейсе
 * @param {World} world мир
 * @param {string} flightName название рейса
 */
function flightDetails(world, flightName) {
  if (typeof flightName !== 'string') throw new Error('Flight name is not a string');

  const flight = world.flights[flightName];
  if (!flight)
    throw new Error('Flight not found');

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
  let info = [
    { field: 'name', value: flight.name },
    { field: 'seats', value: flight.seats },
    { field: 'business seats', value: flight.businessSeats },
    { field: 'registration starts', value: ruDate(flight.registrationStarts) },
    { field: 'registration ends', value: ruDate(flight.registrationEnds) }
  ];

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

  const table = document.createElement('table');
  const header = document.createElement('tr');
  const fields = ['id', 'seat', 'fullName', 'registrationTime'];
  fields.forEach(field => {
    const th = document.createElement('th');
    th.append(document.createTextNode(field));
    header.append(th);
  });
  table.append(header);

  tickets.forEach(ticket => {
    const tr = document.createElement('tr');
    fields.forEach(field => {
      const td = document.createElement('td');
      const value = document.createTextNode(ticket[field] || 'false');
      td.append(value);
      tr.append(td);
    });
    table.append(tr);
  });
  container.append(table);

  return container;
};

/**
 * Вывод информации о билете
 * @param {Ticket[]} tickets билеты
 * @returns {HTMLelement} div с информацией о билете
 */
function showTicket(ticket) {
  let info = [
    { field: 'number', value: ticket.id },
    { field: 'seat', value: ticket.seat },
    { field: 'full name', value: ticket.fullName },
    { field: 'registration time', value: ticket.registrationTime != null }
  ];
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

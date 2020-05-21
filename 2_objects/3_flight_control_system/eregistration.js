/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 *
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
    const flight = flights[ticket.split('-')[0]];
    if (!flight)
      throw new Error('Flight not found');

    ticket = flight.tickets.find(item => item.id === ticket);
    if (!ticket)
        throw new Error('Ticket not found');
    if (ticket.fullName !== fullName)
        throw new Error('It\'s not your ticket');

    if (nowTime < flight.registrationStarts)
      throw new Error(`Time is too early to registration `);
    else if (nowTime > flight.registartionEnds)
      throw new Error(`Time is up for registration`);

    ticket.registrationTime = nowTime;
    return true;
}

console.log(eRegistration('BH118-B50', 'Ivanov I. I.', makeTime(11, 0)));

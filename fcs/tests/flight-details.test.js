describe('flightDetails', () => {
  describe('with valid input data', () => {
    const flight = bigWorld.flights['BH118'];
    const tickets = flight.tickets;
    const info = document.querySelector('#flight-details').innerText;

    it('flight info', () => {
      expect(info).to.include(flight.name);
      expect(info).to.include(flight.seats);
      expect(info).to.include(flight.businessSeats);
      expect(info).to.include(ruDate(flight.registrationStarts));
      expect(info).to.include(ruDate(flight.registrationEnds));
    });

    it('tickets info', () => {
      tickets.forEach(ticket => {
        expect(info).to.include(ticket.id);
        expect(info).to.include(ticket.seat);
        expect(info).to.include(ticket.fullName);
        expect(info).to.include(ticket.registrationTime != null);
      });
    });
  });

  describe('with invalid input data', () => {
    it ('flightName is not a string', () => {
      assert.throws(() => { flightDetails(bigWorld, 123) }, Error, /Flight name is not a string/)
    });

    it ('flight is null', () => {
      assert.throws(() => { flightDetails(bigWorld, '123') }, Error, /Flight not found/)
    });
  });
});

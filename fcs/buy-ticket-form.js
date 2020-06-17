function buyTicketFormInit(world) {
  const form = document.querySelector('#buy-ticket-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    buyTicketFormHandler(event, world)
  });
};

function buyTicketFormHandler(event, world) {
  event.preventDefault();
  const form = event.target;

  const formData = {
    flightName: form.elements.flightName.value,
    fullName: form.elements.fullName.value,
    type: form.elements.type.value ? 1 : 0
  };

  try {
    const result = buyTicket(world, formData.flightName, Date.now(), formData.fullName, formData.type);
    const ticket = result.ticket;

    form.reset();
    alert(`You have successfully bought the ticket: ${ticket.id}, seat: ${ticket.seat}`);

    const flightDetailsEl = document.querySelector('#flight-details');
    if (flightDetailsEl) flightDetailsEl.remove();
    bigWorld = result.world;
    flightDetails(bigWorld, ticket.flight);
  } catch (error) {
    alert(error.message);
  };
};

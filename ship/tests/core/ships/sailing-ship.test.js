describe('SailingShip', () => {
  let sailingShip;
  beforeEach(() => {
    sailingShip = new SailingShip('Sevastopol', '123');
  });

  it('is instance of Ship', () => {
    assert.instanceOf(sailingShip, Ship);
  });

  it('has property mastCount', () => {
    assert.property(sailingShip, 'mastCount');
  });

  it('has property sailArea', () => {
    assert.property(sailingShip, 'sailArea');
  });
});

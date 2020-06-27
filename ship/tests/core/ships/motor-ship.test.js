describe('MotorShip', () => {
  let motorShip;
  beforeEach(() => {
    motorShip = new MotorShip('Zlatoust', '123');
  });

  it('instance of Ship', () => {
    assert.instanceOf(motorShip, Ship);
  });

  it('has property power', () => {
    assert.property(motorShip, 'power');
  });

  it('has property material', () => {
    assert.property(motorShip, 'material');
  });
});

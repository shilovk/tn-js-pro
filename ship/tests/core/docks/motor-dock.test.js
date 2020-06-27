describe('MotorDock', () => {
  let motorDock;
  beforeEach(() => {
    motorDock = new MotorDock('Zlatoust', '123');
  });

  it('instance of Dock', () => {
    assert.instanceOf(motorDock, Dock);
  });
});

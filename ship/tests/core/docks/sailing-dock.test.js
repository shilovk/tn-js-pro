describe('SailingDock', () => {
  let sailingDock;
  beforeEach(() => {
    sailingDock = new SailingDock('Sevastopol', '123');
  });

  it('instance of Dock', () => {
    assert.instanceOf(sailingDock, Dock);
  });
});

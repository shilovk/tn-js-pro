describe('SailingDock', () => {
  const position = new Position(1, 2);
  let ship = new SailingShip('Sevastopol', '123', position);
  let dock;
  beforeEach(() => {
    dock = new SailingDock(position, []);
  });

  it('is instance of Dock', () => {
    assert.instanceOf(dock, Dock);
  });

  it ('unsuccess moor if unsupported ship and so can\'t repair, paint, change if ship is not in Dock)', () => {
    assert.throws(() => { dock.moor(new MotorShip('Other', '1', position)) }, 'Ship is not supported for this Dock');
  });

  describe('success if supported ship when', () => {
    beforeEach(() => {
      dock.moor(ship);
    });

    it('moors', () => {
      assert.include(dock.ships, ship);
    });

    it('repair', () => {
      ship.damage = 10;
      dock.repair(ship);

      assert.equal(ship.damage, 0);
    });

    it('paint', () => {
      const color = 'red';
      dock.paint(ship, color);

      assert.equal(ship.color, color);
    });

    it('change', () => {
      const newShip = new Ship(ship.name, ship.model, ship.position, ship.color, 0);

      assert.deepEqual(dock.change(ship), newShip);
    });
  });
});

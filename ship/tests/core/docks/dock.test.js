describe('Dock', () => {
  const dockPosition = new Position(1, 2);
  let ship = new Ship('Potemkin', '123', dockPosition);
  let dock;
  beforeEach(() => {
    dock = new Dock(dockPosition, [ship]);
  });

  it('creates with properties', () => {
    assert.deepEqual([dock.position, dock.ships], [dockPosition, [ship]]);
  });

  describe('moor', () => {
    describe('success', () => {
      let otherShip = new Ship('Shustriy', '456', dockPosition);

      it('if ship is not in dock and it supported', () => {
        dock.moor(otherShip);

        assert.include(dock.ships, otherShip);
      });

      it('ship drops anchor', () => {
        dock.moor(otherShip);

        assert.isTrue(otherShip.isAnchorDroped());
      });
    });

    describe('unsuccess', () => {
      it('if ship is already moored ', () => {
        assert.throws(() => { dock.moor(ship) }, 'Ship is already in the Dock');
      });

      it('if it is unsupported ship', () => {
        assert.throws(() => { dock.moor({}) }, 'Ship is not supported for this Dock');
      });

      it('if ship is not in dock', () => {
        let otherShip = new Ship('Shustriy', '456');

        assert.throws(() => { dock.moor(otherShip) }, 'Ship should be moved to the Dock');
      });
    });
  });

  describe('unmoor', () => {
    it('success if ship in dock', () => {
      dock.unmoor(ship);

      assert.notInclude(dock.ships, ship);
    });

    it('unsuccess if ship is not in dock', () => {
      assert.throws(() => { dock.unmoor(new Ship('Other', '1')) }, 'Ship is not in Dock');
    });
  });

  describe('repair', () => {
    it('success if ship in dock', () => {
      ship.damage = 10;
      dock.repair(ship);

      assert.equal(ship.damage, 0);
    });

    it('unsuccess if ship is not in dock', () => {
      assert.throws(() => { dock.repair(new Ship('Other', '1')) }, 'Ship is not in Dock');
    });
  });

  describe('paint', () => {
    const color = 'red';

    it('success if ship in dock', () => {
      dock.paint(ship, color);

      assert.equal(ship.color, color);
    });

    it('unsuccess if ship is not in dock', () => {
      assert.throws(() => { dock.paint(new Ship('Other', '1'), color) }, 'Ship is not in Dock');
    });

    it('unsuccess if color is undefind/not a string', () => {
      assert.throws(() => { dock.paint(ship) }, 'Color is not correct');
      assert.throws(() => { dock.paint(ship, 123) }, 'Color is not correct');
    });
  });

  describe('change', () => {
    it('success if ship in dock', () => {
      const newShip = new Ship(ship.name, ship.model, ship.position, ship.color, 0);

      assert.deepEqual(dock.change(ship), newShip);
    });

    it('unsuccess if ship is not in dock', () => {
      assert.throws(() => { dock.change(new Ship('Other')) }, 'Ship is not in Dock');
    });
  });
});

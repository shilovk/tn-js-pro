describe('Ship', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship('Potemkin', '123');
  });

  it('creates with properties', () => {
    assert.deepEqual([ship.name, ship.model], ['Potemkin', '123']);
  });

  it('has raised anchor by default', () => {
    expect(ship.isAnchorDroped()).to.equal(false);
  });

  it('dropes an anchor', () => {
    ship.dropAnchor();

    expect(ship.isAnchorDroped()).to.equal(true);
  });

  it('rises an anchor', () => {
    ship.dropAnchor();
    ship.riseAnchor();

    expect(ship.isAnchorDroped()).to.equal(false);
  });

  it('returns a distance', () => {
    ship._distance = 10;

    expect(ship.getDistance()).to.equal(10);
  });

  it("can't moving with droped anchor", () => {
    ship.dropAnchor();

    assert.throws(() => { ship.moveTo() }, 'Ship must not be anchored');
    assert.throws(() => { ship.move() }, 'Ship must not be anchored');
  });

  describe("moves to 'n' | 'w' | 's' | 'e'", () => {
    let oldX, oldY;
    beforeEach(() => {
      ship = new Ship('Potemkin', '123');
      [oldX, oldY] = [ship.position.x, ship.position.y];
    });

    it('noth', () => {
      ship.move('n');
      assert.deepEqual([ship.position.x, ship.position.y], [oldX, oldY+1]);
    });

    it('south', () => {
      ship.move('s');
      assert.deepEqual([ship.position.x, ship.position.y], [oldX, oldY-1]);
    });


    it('east', () => {
      ship.move('e');
      assert.deepEqual([ship.position.x, ship.position.y], [oldX+1, oldY]);
    });

    it('west', () => {
      ship.move('w');
      assert.deepEqual([ship.position.x, ship.position.y], [oldX-1, oldY]);
    });
  });
});

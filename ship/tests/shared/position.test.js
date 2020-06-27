describe('Position', () => {
  const position = new Position(1, 2);

  it('creates x, y', () => {
    assert.equal(position.x, 1);
    assert.equal(position.y, 2);
  });

  describe('equalXY compare two positions to', () => {
    it('equal', () => {
      const newPosition = new Position(position.x, position.y);

      assert.equal(position.equalXY(newPosition), true);
    });

    it('not equal', () => {
      const newPosition = new Position(3, 4);

      assert.notEqual(position.equalXY(newPosition), true);
    });
  });

  it('calcDistanceFrom calculate distanse from old position', () => {
    const newPosition = new Position(3, 4);

    assert.equal(newPosition.calcDistanceFrom(position).toFixed(2), 2.83);
  });
});

describe('sumOfPositive', () => {
  describe('with valid input data', () => {
    it ('[1, 2, 3, -1]', () => {
      const result = sumOfPositive([1, 2, 3, -1]);
      assert.deepEqual(result, { count: 3, sum: 6 } );
    });

    it ('[-1, -2, 1, 2]', () => {
      const result = sumOfPositive([-1, -2, 1, 2]);
      assert.deepEqual(result, { count: 2, sum: 3 } );
    });
  });

  describe('with invalid input data', () => {
    it ('', () => {
      assert.throws(() => { sumOfPositive('') }, Error, /It is not an Array/)
    });

    it ('abc', () => {
      assert.throws(function() { sumOfPositive('abc') }, Error, /It is not an Array/)
    });
  });

  describe('with boundary data', () => {
    it ('[]', () => {
      const result = sumOfPositive([]);
      assert.deepEqual(result, { count: 0, sum: 0 } );
    });

    it ('[0]', () => {
      const result = sumOfPositive([0]);
      assert.deepEqual(result, { count: 0, sum: 0 } );
    });

    it ('[-1, -2]', () => {
      const result = sumOfPositive([-1, -2]);
      assert.deepEqual(result, { count: 0, sum: 0 } );
    });
  });
});

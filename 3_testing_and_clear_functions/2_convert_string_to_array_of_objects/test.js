const { sumCharsCode, wordStat } = require('./script.js');
const assert = require('assert');
// const chai = require('chai');

describe('Convert string to array of objects', () => {
  describe('sumCharsCode', () => {
    describe('with valid input data', () => {
      it ('abc', () => {
        const result = sumCharsCode('abc');
        assert.equal(result, 294);
      });

      it ('def', () => {
        const result = sumCharsCode('def');
        assert.equal(result, 303);
      });
    });

    describe('with invalid input data', () => {
      it ('[]', () => {
        assert.throws(function() { sumCharsCode([]) }, Error, /It is not a String/)
      });
      it ('123', () => {
        assert.throws(function() { sumCharsCode(123) }, Error, /It is not a String/)
      });
      it ("null", () => {
        assert.throws(function() { sumCharsCode(123) }, Error, /It is not a String/)

      });
    });

    describe('with boundary data', () => {
      it ("''", () => {
        const result = sumCharsCode('');
        assert.equal(result, 0);
      });
      it ("space", () => {
        const result = sumCharsCode(' ');
        assert.equal(result, 32);
      });
    });
  });

  describe('wordStat', () => {
    describe('with valid input data', () => {
      it ('abc', () => {
        const result = wordStat('abc');
        assert.deepEqual(result, [ { word: 'abc', sum: 294 } ]);
      });

      it ('abc def', () => {
        const result = wordStat('abc def');
        assert.deepEqual(result, [
          { word: 'abc', sum: 294 },
          { word: 'def', sum: 303 }
        ]);
      });
    });

    describe('with invalid input data', () => {
      it ('[]', () => {
        assert.throws(function() { wordStat([]) }, Error, /It is not a String/)
      });
      it ('123', () => {
        assert.throws(function() { wordStat(123) }, Error, /It is not a String/)
      });
      it ("null", () => {
        assert.throws(function() { wordStat(123) }, Error, /It is not a String/)

      });
    });

    describe('with boundary data', () => {
      it ("''", () => {
        const result = wordStat('');
        assert.deepEqual(result, [ { word: '', sum: 0 } ]);
      });
      it ("space", () => {
        const result = wordStat(' ');
        assert.deepEqual(result, [ { word: '', sum: 0 } ]);
      });
    });
  });
});

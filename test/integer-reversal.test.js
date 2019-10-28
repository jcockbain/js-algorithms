const assert = require('assert');

const { reverse } = require('../algorithms/integer-reversal');

describe('integer reversal', () => {
  it('should reverse 1234', () => {
    assert.equal(reverse(1234), 4321);
  });
  it('should reverse 2345', () => {
    assert.equal(reverse(2345), 5432);
  });
});

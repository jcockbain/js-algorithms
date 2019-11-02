const assert = require('assert');

const { twoSum } = require('../algorithms/two-sum');

describe('Two Sum', () => {
  it('Should implement two sum', () => {
    assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[1, 3], [2, 2]]);
  });
});

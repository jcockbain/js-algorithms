const assert = require('assert');

const { arrayReverse, arrayReverse2 } = require('../algorithms/array-reverse');

describe('Reverse Arrays', () => {
  it('Should reverse arrays', () => {
    assert.deepEqual(arrayReverse([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(arrayReverse2([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });
});

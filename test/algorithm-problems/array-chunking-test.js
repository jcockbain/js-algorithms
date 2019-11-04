const assert = require('assert');

const { chunk } = require('../algorithms/array-chunking');

describe('Array Chunking', () => {
  it('Should implement array chunking', () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
  });
});

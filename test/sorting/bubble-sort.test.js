const assert = require('assert');

const { bubbleSort } = require('../../sorting/bubble-sort.js');

describe('Bubble Sort', () => {
  it('Should implement bubble sort', () => {
    assert.deepEqual(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    assert.deepEqual(bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

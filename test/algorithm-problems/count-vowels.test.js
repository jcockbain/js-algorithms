const assert = require('assert');

const { countVowels } = require('../algorithms/count-vowels');

describe('Vowels', () => {
  it('Should count vowels', () => {
    assert.equal(countVowels('hello world'), 3);
  });
});

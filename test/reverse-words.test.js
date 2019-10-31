const assert = require('assert');

const { reverseWords, splitBySpaces } = require('../algorithms/reverse-words');

describe('Reverse Words', () => {
  it('Should reverse words', () => {
    assert.deepEqual(splitBySpaces('james cool'), ['james', 'cool']);
    assert.equal(reverseWords('I love JavaScript!'), 'I evol !tpircSavaJ');
  });
});

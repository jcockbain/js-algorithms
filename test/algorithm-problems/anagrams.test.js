const assert = require('assert');

const { isAnagram } = require('../algorithms/anagrams');

describe('Anagrams', () => {
  it('Should implement anagram', () => {
    assert.equal(isAnagram('hello world', 'world hello'), true);
  });
  it('Should implement anagram', () => {
    assert.equal(isAnagram('hellow world', 'hello there'), false);
  });
  it('Should implement anagram', () => {
    assert.equal(isAnagram('hellow world', 'hello there!'), false);
  });
});

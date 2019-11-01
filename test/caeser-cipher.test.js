const assert = require('assert');

const { cipher } = require('../algorithms/caesar-cipher');

describe('Caesar Cipher', () => {
  it('Should shift to the right', () => {
    assert.equal(cipher('I love JavaScript!', 100), 'E hkra FwrwOynelp!');
  });
  it('Should shift to the left', () => {
    assert.equal(cipher('I love JavaScript!', -100), 'M pszi NezeWgvmtx!');
  });
});

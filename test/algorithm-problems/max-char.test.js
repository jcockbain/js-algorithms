const assert = require('assert');

const { maxChar } = require('../algorithms/max-char');

describe('fizz buzz test', () => {
  it('should output l for hello world', () => {
    assert.equal(maxChar('hello world'), 'l');
  });

  it('should output e for cheese', () => {
    assert.equal(maxChar('cheese'), 'e');
  });
});

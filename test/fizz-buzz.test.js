const assert = require('assert');

const { fizzBuzz } = require('../algorithms/fizz-buzz');

describe('fizz buzz test', () => {
  let output;
  beforeEach(() => { output = fizzBuzz(30); });

  it('should output number', () => {
    assert.equal(output[0], 1);
  });

  it('should output Fizz', () => {
    assert.equal(output[1], 'Fizz');
  });

  it('should output Buzz', () => {
    assert.equal(output[2], 'Buzz');
  });

  it('should output Fizz Buzz', () => {
    assert.equal(output[5], 'Fizz Buzz');
  });
});

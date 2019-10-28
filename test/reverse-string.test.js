const assert = require('assert');

const {
  reverseString,
  reverseString2,
  reverseString3,
} = require('../algorithms/reverse-string');

describe('reverse string test', () => {
  it('reverses hello world', () => {
    assert.equal(reverseString('Hello World!'), '!dlroW olleH');
  });
  it('should return first character of the string', () => {
    assert.equal(reverseString('semaJ'), 'James');
  });
});

describe('reverse string 2 test', () => {
  it('reverses hello world', () => {
    assert.equal(reverseString2('Hello World!'), '!dlroW olleH');
  });
  it('should return first character of the string', () => {
    assert.equal(reverseString2('semaJ'), 'James');
  });
});

describe('reverse string 3 test', () => {
  it('reverses hello world', () => {
    assert.equal(reverseString3('Hello World!'), '!dlroW olleH');
  });
  it('should return first character of the string', () => {
    assert.equal(reverseString3('semaJ'), 'James');
  });
});

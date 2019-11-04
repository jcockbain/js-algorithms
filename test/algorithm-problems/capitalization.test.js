const assert = require('assert');

const { capitalize } = require('../algorithms/capitalization');

describe('Capitalization', () => {
  it('Should capitalize phrase', () => {
    assert.equal(capitalize('hello world'), 'Hello World');
  });
});

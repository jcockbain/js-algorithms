const assert = require("assert");

const { reverseString } = require("../algorithms/reverse-string");

describe("reverse string test", function() {
  it("reverses hello world", function() {
    assert.equal(reverseString("Hello World!"), "!dlroW olleH");
  });
  it("should return first charachter of the string", function() {
    assert.equal(reverseString("semaJ"), "James");
  });
});

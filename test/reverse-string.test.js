const assert = require("assert");

const {
  reverseString,
  reverseString2,
  reverseString3,
} = require("../algorithms/reverse-string");

describe("reverse string test", function() {
  it("reverses hello world", function() {
    assert.equal(reverseString("Hello World!"), "!dlroW olleH");
  });
  it("should return first charachter of the string", function() {
    assert.equal(reverseString("semaJ"), "James");
  });
});

describe("reverse string 2 test", function() {
  it("reverses hello world", function() {
    assert.equal(reverseString2("Hello World!"), "!dlroW olleH");
  });
  it("should return first charachter of the string", function() {
    assert.equal(reverseString2("semaJ"), "James");
  });
});

describe("reverse string 3 test", function() {
  it("reverses hello world", function() {
    assert.equal(reverseString3("Hello World!"), "!dlroW olleH");
  });
  it("should return first charachter of the string", function() {
    assert.equal(reverseString3("semaJ"), "James");
  });
});

const reverseString = input =>
  input
    .split("")
    .reverse()
    .join("");

const reverseString2 = input => {
  let result = "";
  for (let char of input) {
    result = char + result;
  }
  return result;
};

const reverseString3 = input =>
  input.split("").reduce((result, char) => char + result);
module.exports = {
  reverseString,
  reverseString2,
  reverseString3,
};

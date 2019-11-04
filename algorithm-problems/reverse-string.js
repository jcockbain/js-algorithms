const reverseString = (input) => input
  .split('')
  .reverse()
  .join('');

const reverseString2 = (input) => input.split('').reduce((result, char) => char + result);

module.exports = {
  reverseString,
  reverseString2,
};

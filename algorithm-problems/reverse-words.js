const reverseWords = (words) => words.split(' ')
  .map((word) => word.split('')
    .reverse()
    .join(''))
  .join(' ');

const splitBySpaces = (words) => words.split(' ');

module.exports = {
  reverseWords,
  splitBySpaces,
};

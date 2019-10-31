const reverseWords = (words) => splitBySpaces(words).map((word) => reverseWord(word)).join(' ');

const splitBySpaces = (words) => words.split(' ');

const reverseWord = (word) => word.split('').reverse().join('');

module.exports = {
  reverseWords,
  splitBySpaces,
};

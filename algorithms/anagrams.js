const countLetters = (string) => {
  const cleanString = string.replace(/\W/g, '').toLowerCase();
  const counter = {};
  cleanString.split('').forEach((letter) => {
    counter[letter] = counter[letter] + 1 || 1;
  });
  return counter;
};

const isAnagram = (a, b) => {
  const countA = countLetters(a);
  const countB = countLetters(b);
  if (Object.keys(countA).length !== Object.keys(countB).length) {
    return false;
  }
  Object.keys(countA).forEach((letter) => {
    if (countA[letter] !== countB[letter]) {
      return false;
    }
  });
  return true;
};

module.exports = {
  isAnagram,
};

const maxChar = (string) => {
  const result = {};
  const cleanString = string.replace(/\W/g, '').toLowerCase();
  const stringArray = cleanString.split('');
  stringArray.forEach((element) => {
    result[element] = result[element] + 1 || 1;
  });
  let currentMaxValue = 0;
  let currentMaxLetter;
  Object.keys(result).forEach((letter) => {
    if (result[letter] > currentMaxValue) {
      currentMaxLetter = letter;
      currentMaxValue = result[letter];
    }
  });
  return currentMaxLetter;
};

module.exports = {
  maxChar,
};

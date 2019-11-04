const countVowels = (string) => {
  let count = 0;
  const choices = 'aeiou'; // or ['a', 'e', 'i', 'o', 'u']
  [...string.toLowerCase()].forEach((c) => {
    if (choices.includes(c)) {
      count += 1;
    }
  });

  return count;
};

module.exports = {
  countVowels,
};

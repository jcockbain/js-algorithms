const isRansom = (note, magazine) => {
  const magWords = magazine.split(' ');
  const magWordCounter = {};
  magWords.forEach((word) => {
    magWordCounter[word] = magWordCounter[word] + 1 || 1;
  });
  const noteWords = note.split(' ');
  for (let i = 0; i < noteWords.length; i += 1) {
    const word = noteWords[i];
    if (magWordCounter[word]
      && magWordCounter[word] > 0) {
      magWordCounter[word] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
module.exports = {
  isRansom,
};

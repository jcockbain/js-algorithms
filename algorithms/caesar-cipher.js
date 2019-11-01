const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const cipher = (phrase, diff) => {
  const input = phrase.toLowerCase();
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    const letter = input[i];
    if (alphabet.indexOf(letter) === -1) {
      output += letter;
      continue;
    }
    let index = (alphabet.indexOf(letter) + diff) % 26;
    if (index > 25) {
      index -= 26;
    }
    if (index < 0) {
      index += 26;
    }
    output
            += phrase[i] === phrase[i].toUpperCase()
        ? alphabet[index].toUpperCase()
        : alphabet[index];
  }
  return output;
};

module.exports = {
  cipher,
};

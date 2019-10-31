// const countVowels = (string) => {
//   const cleanedString = string.replace(/\W/g, '').toLowerCase();
//   const result = {};
//   cleanedString.split('').forEach((letter) => {
//     result[letter] = result[letter] + 1 || 1;
//   });
//   console.log(result);
//   return result.a + result.e + result.i + result.o + result.u;
// };

const countVowels = (string) => {
  let count = 0;
  const choices = 'aeiou'; // or ['a', 'e', 'i', 'o', 'u']

  for (const character of string.toLowerCase()) { if (choices.includes(character)) count++; }

  return count;
};

module.exports = {
  countVowels,
};

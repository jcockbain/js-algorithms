const isPalindrome = (string) => {
  const cleaned = string
    .replace(/\W/g, '').toLowerCase();
  return cleaned
    === cleaned
      .split('')
      .reverse()
      .join('');
};
module.exports = {
  isPalindrome,
};

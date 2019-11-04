const reverse = (int) => parseInt(int
  .toString()
  .split('')
  .reverse()
  .join(''), 10) * Math.sign(int);

module.exports = {
  reverse,
};

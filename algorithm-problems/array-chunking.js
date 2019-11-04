const chunk = (array, length) => {
  const result = [];
  for (let i = 0; i <= array.length - 1; i += length) {
    result.push(array.slice(i, i + length));
  }
  return result;
};

module.exports = {
  chunk,
};

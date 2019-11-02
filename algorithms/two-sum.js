const twoSum = (list, target) => {
  const pairs = [];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (list[i] + list[j] === target) {
        pairs.push([list[i], list[j]]);
      }
    }
  }
  return pairs;
};

module.exports = {
  twoSum,
};

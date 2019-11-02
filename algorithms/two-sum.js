const twoSum = (list, target) => {
  const pairs = [];
  for (let i = 0; i < list.length; i += 1) {
    const partner = target - list[i];
    if (list.slice(i + 1).includes(partner)) {
      pairs.push([list[i], partner]);
    }
  }
  return pairs;
};

module.exports = {
  twoSum,
};

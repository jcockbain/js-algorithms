const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        const less = array[j + 1];
        array[j + 1] = array[j];
        array[j] = less;
      }
    }
  }

  return array;
};

module.exports = {
  bubbleSort,
};

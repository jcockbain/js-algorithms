const arrayReverse = (array) => array.reverse();

const arrayReverse2 = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
};

module.exports = {
  arrayReverse,
  arrayReverse2,
};

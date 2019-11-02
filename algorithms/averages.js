
const arrayHasOneElement = (array) => {
  const values = new Set(array);
  return (values.size <= 1);
};

class Stats {
  constructor(array) {
    this.list = array;
  }

  static round(x, round = 2) {
    return Math.round(x * 10 ** round) / 10 ** round;
  }

  mean() {
    const sum = this.list.reduce((a, b) => a + b, 0);
    return sum / this.list.length;
  }

  mode() {
    const counter = {};
    this.list.forEach((num) => {
      counter[num] = counter[num] + 1 || 1;
    });
    let max = [];
    let maxCount = 0;
    if (arrayHasOneElement(Object.values(counter))) {
      return [];
    }
    Object.keys(counter).forEach((num) => {
      const value = parseFloat(num);
      const count = counter[value];
      if (count > maxCount) {
        max = [value];
        maxCount = count;
      } else if (count === maxCount) {
        max.push(value);
      }
    });
    return max;
  }


  median() {
    const sortedArray = this.list.sort();
    return (sortedArray.length % 2 === 0)
      ? (sortedArray[sortedArray.length / 2] + sortedArray[(sortedArray.length / 2) - 1]) / 2
      : sortedArray[Math.floor(sortedArray.length / 2)];
  }
}

module.exports = {
  Stats,
};

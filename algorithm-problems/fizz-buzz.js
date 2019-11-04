const fizzBuzz = (upper) => {
  const result = [];
  for (let i = 1; i < upper; i += 1) {
    if (i % 6 === 0) {
      result.push('Fizz Buzz');
    } else if (i % 2 === 0) {
      result.push('Fizz');
    } else if (i % 3 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
};

module.exports = {
  fizzBuzz,
};

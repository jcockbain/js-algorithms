const maxProfit = (prices) => {
  let profit = 0;
  let result;
  for (let i = 0; i < prices.length; i += 1) {
    for (let j = i + 1; j < prices.length; j += 1) {
      const buy = prices[i];
      const sell = prices[j];
      if (sell - buy > profit) {
        profit = sell - buy;
        result = [buy, sell];
      }
    }
  }
  return result;
};

module.exports = {
  maxProfit,
};

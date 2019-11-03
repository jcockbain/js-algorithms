// const maxProfit = (prices) => {
//   let profit = 0;
//   let result;
//   for (let i = 0; i < prices.length; i += 1) {
//     for (let j = i + 1; j < prices.length; j += 1) {
//       const buy = prices[i];
//       const sell = prices[j];
//       if (sell - buy > profit) {
//         profit = sell - buy;
//         result = [buy, sell];
//       }
//     }
//   }
//   return result;
// };

function maxProfit(prices) {
  let minBuyPrice = prices[0] < prices[1] ? prices[0] : prices[1];
  let maxSellPrice = prices[0] < prices[1] ? prices[1] : prices[2];
  let maxProfitValue = maxSellPrice - minBuyPrice;
  let tempBuyPrice = minBuyPrice;

  for (let index = 2; index < prices.length; index += 1) {
    const sellPrice = prices[index];

    if (minBuyPrice > sellPrice) tempBuyPrice = prices[index];
    else {
      const profit = sellPrice - minBuyPrice;
      if (profit > maxProfitValue) {
        maxProfitValue = profit;
        maxSellPrice = sellPrice;
        minBuyPrice = tempBuyPrice;
      }
    }
  }

  return [minBuyPrice, maxSellPrice];
}

module.exports = {
  maxProfit,
};

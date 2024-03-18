const maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];
  for (const price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }
  return max;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

const maxProfit2 = function (prices) {
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      res += diff;
    }
  }
  return res;
};

console.log(maxProfit2(prices));

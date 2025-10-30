/**
 * 给你两个整数数组 prices 和 strategy，其中：

prices[i] 表示第 i 天某股票的价格。
strategy[i] 表示第 i 天的交易策略，其中：
-1 表示买入一单位股票。
0 表示持有股票。
1 表示卖出一单位股票。
同时给你一个 偶数 整数 k，你可以对 strategy 进行 最多一次 修改。一次修改包括：

选择 strategy 中恰好 k 个 连续 元素。
将前 k / 2 个元素设为 0（持有）。
将后 k / 2 个元素设为 1（卖出）。
利润 定义为所有天数中 strategy[i] * prices[i] 的 总和 。

返回你可以获得的 最大 可能利润。

注意： 没有预算或股票持有数量的限制，因此所有买入和卖出操作均可行，无需考虑过去的操作。

 

示例 1：

输入： prices = [4,2,8], strategy = [-1,0,1], k = 2

输出： 10

解释：

修改	策略	利润计算	利润
原始	[-1, 0, 1]	(-1 × 4) + (0 × 2) + (1 × 8) = -4 + 0 + 8	4
修改 [0, 1]	[0, 1, 1]	(0 × 4) + (1 × 2) + (1 × 8) = 0 + 2 + 8	10
修改 [1, 2]	[-1, 0, 1]	(-1 × 4) + (0 × 2) + (1 × 8) = -4 + 0 + 8	4
因此，最大可能利润是 10，通过修改子数组 [0, 1] 实现。

示例 2：

输入： prices = [5,4,3], strategy = [1,1,0], k = 2

输出： 9

解释：

修改	策略	利润计算	利润
原始	[1, 1, 0]	(1 × 5) + (1 × 4) + (0 × 3) = 5 + 4 + 0	9
修改 [0, 1]	[0, 1, 0]	(0 × 5) + (1 × 4) + (0 × 3) = 0 + 4 + 0	4
修改 [1, 2]	[1, 0, 1]	(1 × 5) + (0 × 4) + (1 × 3) = 5 + 0 + 3	8
因此，最大可能利润是 9，无需任何修改即可达成。

 
 */

const maxProfit = function (prices, strategy, k) {
  let total = 0;
  let sum = 0

  for (let i = 0; i < k / 2; i++) {
    const p = prices[i];
    const s = strategy[i]
    total += p * s
    sum -= p * s
  }

  for (let i = k / 2; i < k ; i++) {
    const p = prices[i];
    const s = strategy[i]
    total += p * s
    sum += p * (1 - s)
  }

  let maxSum = Math.max(sum, 0)

  for (let i = k; i < prices.length; i++) {
    const p = prices[i];
    const s = strategy[i]
    total += p * s
    // 对于当前i点的收益变更有取决于:  [新加入的 i 收益] + [离开 k 区间的 i - k 的收益] + [i - k/2 右右半k区间转入左半k区间的收益变化] 
    sum += p * (1 - s) + prices[i - k] * strategy[i - k] - prices[i - k/2]
    maxSum = Math.max(maxSum, sum)
  }

  return total + maxSum
};


const prices = [5, 4, 3], strategy = [1, 1, 0], k = 2

console.log(maxProfit(prices, strategy, k))



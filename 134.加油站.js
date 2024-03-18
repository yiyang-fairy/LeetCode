/**
 *示例 1:

输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
输出: 3
解释:
从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
因此，3 可为起始索引。
 */

// 当前的油 + gas[i] >= cast[i]

const canCompleteCircuit = function (gas, cost) {
  const gasLen = gas.length;
  let start = 0;
  let curSum = 0;
  let totalSum = 0;

  for (let i = 0; i < gasLen; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];
    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }

  if (totalSum < 0) return -1;

  return start;
};
const gas = [2],
  cost = [2];
console.log(canCompleteCircuit(gas, cost));

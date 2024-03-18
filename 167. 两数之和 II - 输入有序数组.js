/**
 * 示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
示例 2：

输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
示例 3：

输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 */
const twoSum = function (numbers, target) {
  const n = numbers.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1];
    }
    while (numbers[l] + numbers[r] > target) r--;
    while (numbers[l] + numbers[r] < target) l++;
  }
  return -1;
};

const numbers = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(numbers, target));

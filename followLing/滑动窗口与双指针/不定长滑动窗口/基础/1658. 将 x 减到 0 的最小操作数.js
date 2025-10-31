/**
 * 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

示例 1：

输入：nums = [1,1,4,2,3], x = 5
输出：2
解释：最佳解决方案是移除后两个元素，将 x 减到 0 。

示例 2：

输入：nums = [5,6,7,8,9], x = 4
输出：-1

示例 3：

输入：nums = [3,2,20,1,1,3], x = 10
输出：5
解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。

提示：

1 <= nums.length <= 105
1 <= nums[i] <= 104
1 <= x <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function (nums, x) {
  // 只从头尾减少元素, 可以将中间的区间看作是窗口

  let ans = -1
  let left = 0
  const total = nums.reduce((acc, curr) => acc + curr, 0)
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum > total - x) {
      sum -= nums[left]
      left++
    }
    if (sum === total - x) {
      ans = Math.max(i - left + 1, ans)
    }
  }
  return ans < 0 ? -1 : nums.length - ans
};

console.log('测试用例1', minOperations([1, 1, 4, 2, 3], 5));  //2
console.log('测试用例2', minOperations([5, 6, 7, 8, 9], 4));  //-1
console.log('测试用例3', minOperations([3, 2, 20, 1, 1, 3], 10));  //5
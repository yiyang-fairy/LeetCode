/**
 * 给定一个二进制数组 nums 和一个整数 k，假设最多可以翻转 k 个 0 ，则返回执行操作后 数组中连续 1 的最大个数 。

示例 1：

输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释：[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。

示例 2：

输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
输出：10
解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 10。

提示：

1 <= nums.length <= 105
nums[i] 不是 0 就是 1
0 <= k <= nums.length
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let left = 0
  let ans = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++
    }
    while (count > k) {
      if (nums[left] === 0) {
        count--
      }
      left++
    }
    ans = Math.max(ans, i - left + 1)
  }
  return ans
};

console.log('测试用例1', longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));  //6
console.log('测试用例2', longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));  //10
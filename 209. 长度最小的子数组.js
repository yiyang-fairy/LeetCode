/**
 * 示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
 */

const minSubArrayLen = function (target, nums) {
  const n = nums.length;
  let l = 0;
  let r = 0;
  let sum = nums[0];
  let res = Infinity;
  while (r < n) {
    if (sum >= target) {
      res = Math.min(res, r - l + 1);
      sum -= nums[l];
      l++;
    } else if (sum < target) {
      r++;
      sum += nums[r];
    }
  }
  return res == Infinity ? 0 : res;
};

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));

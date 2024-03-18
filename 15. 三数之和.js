/**
 * 示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
 */

const threeSum = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    const target = 0 - nums[i];
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (nums[l] + nums[r] < target && l < r) l++;
      else if (nums[l] + nums[r] > target && l < r) r--;
    }
  }
  return res;
};

const nums = [0, 0, 0, 0, 0];
console.log(threeSum(nums));

/*
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23

*/

const maxSubArray = (nums) => {
  let pre = 0,
    maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//  i,j,max= -2,current = -2
//  i = 0, j = 1 c = -1 m = -1
// i

console.log(maxSubArray(nums));

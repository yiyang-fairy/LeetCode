/**
 * 
 * 示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 */

const productExceptSelf = function (nums) {
  const front = [];
  const back = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      front[i] = 1;
    } else {
      front[i] = front[i - 1] * nums[i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      back[i] = 1;
    } else {
      back[i] = back[i + 1] * nums[i + 1];
    }
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = front[i] * back[i];
  }
  return res;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));

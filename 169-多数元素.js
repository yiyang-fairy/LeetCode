/*
示例 1：

输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
*/
var majorityElement = function (nums) {
  const n = Math.floor(nums.length / 2);
  const numsCount = new Map();
  let most;
  nums.forEach((val) => {
    numsCount.set(val, numsCount.get(val) ? numsCount.get(val) + 1 : 1);
    if (numsCount.get(val) > n) {
      most = val;
    }
  });
  return most;
};

const nums = [2, 2, 1, 1, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));

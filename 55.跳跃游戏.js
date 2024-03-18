/*

示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 
*/

// [2,3,1,1,4]
//  i
//   i
//          i

const canJump = function (nums) {
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
    if (reachable < i) {
      return false;
    }
    reachable = Math.max(reachable, i + nums[i]);
  }
  return true;
};

const nums = [1, 2, 0, 3];

// dp[i] 表示到达 i 的最小跳跃数
// dp[i] = dp[j] + i - j

// console.log(canJump(nums));

const canJump2 = function (nums) {
  let position = nums.length - 1;
  let step = 0;
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i;
        step++;
        break;
      }
    }
  }
  return step;
};

console.log(canJump2(nums), "canJump2");

/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]

示例 3：

输入：nums = [], target = 0
输出：[-1,-1]

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const lower_Bound = (nums, target) => {
    // 查找的是第一个 >= target  的位置
    let left = 0;
    let right = nums.length - 1 // [left, right] 闭区间

    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return left
  }

  // 目标值的开始位置和结束位置可以理解为: >= target 的位置 到 <= target 的位置
  // lower_Bound 查找的是大于等于 target 的位置, <= target 可以转换为 > target的位置 - 1
  // > target 的位置可以转换为 >= target+1

  const start = lower_Bound(nums, target)
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1]
  }
  const end = lower_Bound(nums, target + 1) - 1
  return [start, end]
};

console.log('测试用例1', JSON.stringify(searchRange([5, 7, 7, 8, 8, 10], 8)));  // [3,4]
console.log('测试用例2', JSON.stringify(searchRange([5, 7, 7, 8, 8, 10], 6)));  // [-1,-1]
console.log('测试用例3', JSON.stringify(searchRange([], 0)));  // [-1,-1]
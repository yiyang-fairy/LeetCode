/**
 * 给你一个整数数组 nums 和两个正整数 m 和 k 。

请你返回 nums 中长度为 k 的 几乎唯一 子数组的 最大和 ，如果不存在几乎唯一子数组，请你返回 0 。

如果 nums 的一个子数组有至少 m 个互不相同的元素，我们称它是 几乎唯一 子数组。

子数组指的是一个数组中一段连续 非空 的元素序列。

 

示例 1：

输入：nums = [2,6,7,3,1,7], m = 3, k = 4
输出：18
解释：总共有 3 个长度为 k = 4 的几乎唯一子数组。分别为 [2, 6, 7, 3] ，[6, 7, 3, 1] 和 [7, 3, 1, 7] 。这些子数组中，和最大的是 [2, 6, 7, 3] ，和为 18 。
示例 2：

输入：nums = [5,9,9,2,4,5,4], m = 1, k = 3
输出：23
解释：总共有 5 个长度为 k = 3 的几乎唯一子数组。分别为 [5, 9, 9] ，[9, 9, 2] ，[9, 2, 4] ，[2, 4, 5] 和 [4, 5, 4] 。这些子数组中，和最大的是 [5, 9, 9] ，和为 23 。
示例 3：

输入：nums = [1,2,1,2,1,2,1], m = 3, k = 3
输出：0
解释：输入数组中不存在长度为 k = 3 的子数组含有至少  m = 3 个互不相同元素的子数组。所以不存在几乎唯一子数组，最大和为 0 。
 */

const maxSum1 = function (nums, m, k) {
  const map = new Map()
  let max = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    sum += nums[i]

    if (i < k - 1) {
      continue
    }

    if (map.size >= m) {
      max = Math.max(max, sum)
    }
    console.log({map, sum, i})
    const left = nums[i - k + 1]
    sum -= left
    if (map.get(left) === 1) {
      map.delete(left)
    } else {
      map.set(left, map.get(left) - 1)
    }

  }

  return max
};
const maxSum = function (nums, m, k) {
  let max = 0;
  let sum = 0;
  let uniqueCount = 0;
  let map = new Map(); // 用于记录每个元素的出现频率

  for (let i = 0; i < nums.length; i++) {
    // 添加当前元素到频率映射中
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (map.get(nums[i]) === 1) {
      uniqueCount++;
    }
    sum += nums[i];

    // 当窗口大小超过k时，移除窗口左端的元素
    if (i >= k) {
      let leftElement = nums[i - k];
      map.set(leftElement, map.get(leftElement) - 1);
      if (map.get(leftElement) === 0) {
        map.delete(leftElement);
        uniqueCount--;
      }
      sum -= leftElement;
    }

    // 检查当前窗口是否满足条件
    if (i >= k - 1 && uniqueCount >= m) {
      max = Math.max(max, sum);
    }
  }

  return max;
};

// 测试用例
const nums1 = [1, 1, 1, 3], m1 = 2, k1 = 2;
console.log(maxSum1(nums1, m1, k1)); // 输出 4

const nums2 = [1, 4, 1, 4], m2 = 2, k2 = 3;
console.log(maxSum1(nums2, m2, k2)); // 输出 9

const nums = [1, 2, 1, 2, 1, 2, 1], m = 3, k = 3  // 0

console.log(maxSum1(nums, m, k))
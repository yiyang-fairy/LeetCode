/**
 * 给你一个整数数组 arr 和两个整数 k 和 threshold 。

请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。

 

示例 1：

输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
输出：3
解释：子数组 [2,5,5],[5,5,5] 和 [5,5,8] 的平均值分别为 4，5 和 6 。其他长度为 3 的子数组的平均值都小于 4 （threshold 的值)。
示例 2：

输入：arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
输出：6
解释：前 6 个长度为 3 的子数组平均值都大于 5 。注意平均值不是整数。
 */

const numOfSubarrays = function (arr, k, threshold) {
  let sum = 0 
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (i < k - 1) {
      continue
    }

    if (sum >= k * threshold) {
      res ++
    }

    sum -= arr[i - k + 1]
   }
  return res
};

const arr = [2, 2, 2, 2, 5, 5, 5, 8], k = 3, threshold = 4
console.log(numOfSubarrays(arr, k, threshold))
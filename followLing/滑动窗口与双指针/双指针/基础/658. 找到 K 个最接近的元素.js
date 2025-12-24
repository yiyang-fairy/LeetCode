/**
 * 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b

示例 1：

输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]

示例 2：

输入：arr = [1,1,2,3,4,5], k = 4, x = -1
输出：[1,1,2,3]

提示：

1 <= k <= arr.length
1 <= arr.length <= 104
arr 按 升序 排列
-104 <= arr[i], x <= 104
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {

  let i = 0
  let j = arr.length - 1

  while (j - i + 1 > k) {
    const absI = Math.abs(arr[i] - x)
    const absJ = Math.abs(arr[j] - x)

    if (absI > absJ) {
      i++
    } else {
      j--
    }
  }
  return arr.slice(i, j + 1)
};

console.log('测试用例1', findClosestElements([1, 2, 3, 4, 5], 4, 3));  //[1,2,3,4]
console.log('测试用例2', findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));  //[1,1,2,3]
console.log('测试用例3', findClosestElements([1, 1, 1, 10, 10, 10], 1, 9));  //[1,1,2,3]
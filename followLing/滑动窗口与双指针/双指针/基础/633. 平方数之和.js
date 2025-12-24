/**
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

示例 1：

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5

示例 2：

输入：c = 3
输出：false

提示：

0 <= c <= 231 - 1
 */

/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {

  let i = 0
  let j = Math.floor(Math.sqrt(c))
  console.log('j: ', j)

  while (i <= j) {
    const sum = i * i + j * j
    if (sum < c) {
      i++
    }
    if (sum > c) {
      j--
    }
    if (sum === c) {
      return true
    }
  }

  return false
};

console.log('测试用例1', judgeSquareSum(5));  //true
console.log('测试用例2', judgeSquareSum(3));  //false
console.log('测试用例3', judgeSquareSum(2));  //true
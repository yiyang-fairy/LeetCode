/**
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

示例 1：

输入：s = "abcdefg", k = 2
输出："bacdfeg"

示例 2：

输入：s = "abcd", k = 2
输出："bacd"

提示：

1 <= s.length <= 104
s 仅由小写英文组成
1 <= k <= 104
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
  const arr = Array.from(s)
  const reverse = (left, right) => {
    let i = left < 0 ? 0 : left
    let j = right
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
    console.log('arr: ', arr)
  }

  for (let i = 0; i < s.length; i += 2 * k) {
    reverse(i, Math.min(i + k, s.length) - 1)
  }

  return arr.join('')
};

console.log('测试用例1', reverseStr("abcdefg", 2));  //"bacdfeg"
console.log('测试用例2', reverseStr("abcd", 2));  //"bacd"
console.log('测试用例2', reverseStr("abcd", 3));  //"cbad"
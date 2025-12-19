/**
 * 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。

请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。

示例 1：

输入：s = "abcabc"
输出：10
解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。

示例 2：

输入：s = "aaacb"
输出：3
解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。

示例 3：

输入：s = "abc"
输出：1

提示：

3 <= s.length <= 5 x 10^4
s 只包含字符 a，b 和 c 。
 */

/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = function (s) {

  const char = {
    a: 0,
    b: 0,
    c: 0
  }

  let left = 0;
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    char[s[i]]++

    while (char.a > 0 && char.b > 0 && char.c > 0) {
      char[s[left]]--
      left++
    }
    ans += left
  }
  return ans
};

console.log('测试用例1', numberOfSubstrings("abcabc"));  //10
console.log('测试用例2', numberOfSubstrings("aaacb"));  //3
console.log('测试用例3', numberOfSubstrings("abc"));  //1
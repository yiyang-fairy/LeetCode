/**
 * 给你一个字符串 s ，请找出满足每个字符最多出现两次的最长子字符串，并返回该子字符串的 最大 长度。

 

示例 1：

输入： s = "bcbbbcba"

输出： 4

解释：

以下子字符串长度为 4，并且每个字符最多出现两次："bcbbbcba"。

示例 2：

输入： s = "aaaa"

输出： 2

解释：

以下子字符串长度为 2，并且每个字符最多出现两次："aaaa"。
 */

const maximumLengthSubstring = function (s) {

  let ans = 0
  const map = new Map()
  let left = 0

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)

    while (map.get(s[i]) > 2) {
      map.set(s[left], map.get(s[left]) - 1)
      left++
    }
    ans = Math.max(i - left + 1, ans)
  }

  return ans
};

console.log('测试用例1', maximumLengthSubstring("bcbbbcba"))  //4
console.log('测试用例2', maximumLengthSubstring("aaaa"))     //2

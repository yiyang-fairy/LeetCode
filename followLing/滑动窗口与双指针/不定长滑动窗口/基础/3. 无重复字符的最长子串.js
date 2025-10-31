/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

const lengthOfLongestSubstring = function (s) {
  let res = 0
  let left = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
    
    while (map.get(s[i]) > 1) {
      map.set(s[left], map.get(s[left]) - 1)
      left++
    }

    res = Math.max(res, i - left + 1)
  }

  return res
};

console.log('测试用例1', lengthOfLongestSubstring("abcabcbb"))  //3
console.log('测试用例2', lengthOfLongestSubstring("bbbbb"))     //1
console.log('测试用例3', lengthOfLongestSubstring("pwwkew"))    //3
console.log('测试用例4', lengthOfLongestSubstring("ggububgvfk"))    //6
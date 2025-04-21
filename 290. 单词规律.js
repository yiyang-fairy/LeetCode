/**
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

 

示例1:

输入: pattern = "abba", s = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", s = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", s = "dog cat cat dog"
输出: false
 */

var wordPattern = function (pattern, s) {
  const t = s.split(" ")
    if (pattern.length !== t.length) {
    return false
  }
  
  const map1 = new Map()
  const map2 = new Map()
  for (let i = 0; i < pattern.length; i++) {
    if (!map1.has(pattern[i])) {
      map1.set(pattern[i], t[i])
    }
    if (!map2.has(t[i])) {
      map2.set(t[i], pattern[i])
    }

    if (map1.get(pattern[i]) !== t[i] || map2.get(t[i]) !== pattern[i]) {
      return false
    }
  }
  return true;
};

const pattern = "aaaa", s = "dog cat cat dog"



console.log(wordPattern(pattern, s))
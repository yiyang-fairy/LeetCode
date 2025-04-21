/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。

 

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
 */

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }

  const map1 = new Map()
  const map2 = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i])) {
      map1.set(s[i], 1)
    } else {
      map1.set(s[i], map1.get(s[i]) + 1)
    }

    if (!map2.has(t[i])) {
      map2.set(t[i], 1)
    } else {
      map2.set(t[i], map2.get(t[i]) + 1)
    }
  }

  for (const [key, value] of map1) {
    if (!map2.has(key)) return false;
    if (value !== map2.get(key)) return false;
  }

  return true
};

const s = "rat", t = "car"

console.log(isAnagram(s, t))
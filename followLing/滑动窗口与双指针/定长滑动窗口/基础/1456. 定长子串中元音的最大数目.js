/**
 * 给你字符串 s 和整数 k 。

请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

英文中的 元音字母 为（a, e, i, o, u）。

 

示例 1：

输入：s = "abciiidef", k = 3
输出：3
解释：子字符串 "iii" 包含 3 个元音字母。
示例 2：

输入：s = "aeiou", k = 2
输出：2
解释：任意长度为 2 的子字符串都包含 2 个元音字母。
示例 3：

输入：s = "leetcode", k = 3
输出：2
解释："lee"、"eet" 和 "ode" 都包含 2 个元音字母。
示例 4：

输入：s = "rhythms", k = 4
输出：0
解释：字符串 s 中不含任何元音字母。
示例 5：

输入：s = "tryhard", k = 4
输出：1
 */

const maxVowels = function (s, k) {
  const target = ['a', 'e', 'i', 'o', 'u']
  let p = 0
  let count = 0
  let maxCount = 0
  while (p < k && p < s.length) {
    if (target.includes(s[p])) {
      count++
    }
    p++
  }
  maxCount = count
  if (maxCount === k) {
    return maxCount
  }
  console.log(count, "count")
  while (p < s.length) {
    console.log(p, s[p], p - k, s[p - k])
    
    if (target.includes(s[p - k ]) && count > 0) {
      count --
    }
    if (target.includes(s[p])) {
      count++
    }
    maxCount = Math.max(count, maxCount)
    if (maxCount === k) {
      return maxCount
    }
    console.log(count, 'count')

    p++
  }
  return maxCount
};

const maxVowels1 = function (s, k) {
  const target = ['a', 'e', 'i', 'o', 'u']
  let max = 0, count = 0

  for (let i = 0; i < s.length; i++) {
    if (target.includes(s[i])) {
      count ++
    }

    if (i < k) {
      max = count
      continue
    } 
    if (target.includes(s[i - k]) && count > 0) {
      count --
    }

    max = Math.max(count, max)
    if (max === k) {
      return max
    }
  }
  return max

}

const s = "a", k = 1
console.log(maxVowels1(s, k))

//  t r y h a r d
//          p
/**
 * 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。

返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。

示例 1：

输入: letters = ['c', 'f', 'j']，target = 'a'
输出: 'c'
解释：letters 中字典上比 'a' 大的最小字符是 'c'。

示例 2:

输入: letters = ['c','f','j'], target = 'c'
输出: 'f'
解释：letters 中字典顺序上大于 'c' 的最小字符是 'f'。

示例 3:

输入: letters = ['x','x','y','y'], target = 'z'
输出: 'x'
解释：letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。

提示：

2 <= letters.length <= 104
letters[i] 是一个小写字母
letters 按非递减顺序排序
letters 最少包含两个不同的字母
target 是一个小写字母
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
  const lower_Bound = (arr, target) => {
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      if (arr[mid] < target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    return l
  }

  const nextChar = c => String.fromCharCode(c.charCodeAt(0) + 1);

  const ans = lower_Bound(letters, nextChar(target))
  console.log('ans: ', ans, letters[ans])
  if (ans === letters.length) {
    return letters[0]
  }
  return letters[ans] 
};

console.log('测试用例1', JSON.stringify(nextGreatestLetter(['c', 'f', 'j'], 'a')));  // "c"
console.log('测试用例2', JSON.stringify(nextGreatestLetter(['c', 'f', 'j'], 'c')));  // "f"
console.log('测试用例3', JSON.stringify(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z')));  // "x"
console.log('测试用例4', JSON.stringify(nextGreatestLetter(["c", "f", "j"], 'd')));  // "f"
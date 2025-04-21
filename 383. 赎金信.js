/**
 * 示例 1：

输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：

输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：

输入：ransomNote = "aa", magazine = "aab"
输出：true
 */

const canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let temp = magazine
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i]
    
    if (temp.includes(char)) {
      {
        temp = temp.replace(char, "#")
      }
    } else {
      return false
    }
  }

  return true
};

const ransomNote = "aa", magazine = "aab"

console.log(canConstruct(ransomNote, magazine))
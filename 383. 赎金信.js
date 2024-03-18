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
  const n = ransomNote.length;
  let i = 0;
  while (i < n) {
    ransomNote.replace(ransomNote[i], "");
    magazine.replace(ransomNote[i], "");
    i++;
  }
  if (ransomNote.length > 0) return false;
  else return true;
};

/**
 * 
 *示例 1：

输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。
示例 2：

输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
示例 3：

输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。
 */

const lengthOfLastWord = function (s) {
  const sLen = s.length;
  let r = sLen - 1;
  while (s[r] == " " && r >= 0) {
    r--;
  }

  let l = r;
  while (s[l] !== " " && l >= 0) {
    l--;
  }
  return r - l;
};

const s = "qqqqq  aaaa     ";
console.log(lengthOfLastWord(s), "res");

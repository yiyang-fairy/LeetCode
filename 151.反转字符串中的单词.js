/**
 * 示例 1：

输入：s = "the sky is blue"
输出："blue is sky the"
示例 2：

输入：s = "  hello world  "
输出："world hello"
解释：反转后的字符串中不能存在前导空格和尾随空格。
示例 3：

输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
 */

const reverseWords = function (s) {
  const words = [];
  let l = 0;
  let r = 0;
  while (r < s.length && l < s.length) {
    while (s[l] === " " && l < s.length) l++;
    r = l;
    if (l === s.length) {
      break;
    }
    while (s[r] !== " " && r < s.length) r++;
    words.push(s.substring(l, r));
    l = r;
  }
  return words.reverse().join(" ");
};

const s = "            hello                       ";
console.log(reverseWords(s));

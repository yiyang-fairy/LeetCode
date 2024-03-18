/**
 * 示例 1：

输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
输出顺序无关紧要。返回 [9,0] 也是可以的。
示例 2：

输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]
解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
所以我们返回一个空数组。
示例 3：

输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]
解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。
 */

const findSubstring = function (s, words) {
  const len = s.length;
  const windowLen = words[0].length * words.length;
  let l = 0;
  let r = windowLen - 1;
  const res = [];
  while (r < len) {
    let window = s.slice(l, r + 1);
    console.log(window, "window");
    for (let i = 0; i < words.length; i++) {
      window = window.replace(words[i], "");
      console.log(window, "replace");
    }
    if (window.length === 0) {
      res.push(l);
    }
    l++;
    r++;
  }
  return res;
};

const s = "ababaab",
  words = ["ab", "ba", "ba"];

console.log(findSubstring(s, words));

/**
 * 
 * 示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 * 
 */

const longestCommonPrefix = function (strs) {
  let shortest = strs[0];
  for (const v of strs) {
    shortest = shortest.length < v.length ? shortest : v;
  }
  for (let i = shortest.length - 1; i >= 0; i--) {
    const curr = shortest.substring(0, i + 1);
    const cover = strs.filter((v) => v.startsWith(curr) === true);
    if (cover.length === strs.length) {
      return curr;
    }
  }
  return "";
};

const strs = ["a", "ba"];
console.log(longestCommonPrefix(strs));

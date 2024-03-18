/**
 * 
 * 
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

/**
 * 
 * @param {*} s 
 * 示例 1:

输入: s = "III"
输出: 3
示例 2:

输入: s = "IV"
输出: 4
示例 3:

输入: s = "IX"
输出: 9
示例 4:

输入: s = "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
示例 5:

输入: s = "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
 */

const romanToInt = function (s) {
  const R = (x) => {
    const roman = new Map([
      ["I", 1],
      ["V", 5],
      ["X", 10],
      ["L", 50],
      ["C", 100],
      ["D", 500],
      ["M", 1000],
    ]);
    return roman.get(x);
  };

  const n = s.length;
  let res = R(s[n - 1]) > R(s[n - 2]) ? 0 : R(s[n - 1]);
  console.log(res, "start");
  for (let i = 0; i < n - 1; i++) {
    console.log(R(s[i]), s[i]);
    if (R(s[i]) < R(s[i + 1])) {
      res += R(s[i + 1]) - R(s[i]);
      i++;
    } else {
      res += R(s[i]);
    }
  }
  return res;
};
const s = "CCCI";
console.log(romanToInt(s), "res");

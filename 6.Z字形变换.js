/**
 * 
 * 示例 1：

输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
示例 2：
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I

0   6     12
1  57   1113
2 4 8 10  14 16
3   9     15 
       
*/
const convert = function (s, numRows) {
  const n = s.length;
  if (n < 2) return s;
  const map = new Array(numRows).fill("");
  let direction = false; // true 方向向下  false 方向向上
  let curr = 0;
  for (let i = 0; i < n; i++) {
    map[curr] += s[i];
    if (curr === 0 || curr === numRows - 1) direction = !direction;
    curr += direction ? 1 : -1;
  }
  return map.join("");
};
const s = "AB",
  numRows = 1;
console.log(convert(s, numRows));

/**
 * 
 * 示例 1:

输入: num = 3
输出: "III"
示例 2:

输入: num = 4
输出: "IV"
示例 3:

输入: num = 9
输出: "IX"
示例 4:

输入: num = 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: num = 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.

MXXVIII

1,028
 */
const R = (x) => {
  const roman = new Map([
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
  ]);
  return roman.get(x);
};

const intToRoman = function (num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const res = [];
  let n = num;
  let i = 0;
  while (n > 0) {
    if (n >= nums[i]) {
      res.push(roman[i]);
      n = n - nums[i];
    }
    if (n < nums[i]) {
      i++;
    }
  }
  return res.join("");
};

const num = 1028;
console.log(intToRoman(num), "res");

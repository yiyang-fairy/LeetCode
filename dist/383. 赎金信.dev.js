"use strict";

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
var canConstruct = function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  var temp = magazine;

  for (var i = 0; i < ransomNote.length; i++) {
    var _char = ransomNote[i];

    if (temp.includes(_char)) {
      {
        temp = temp.replace(_char, "#");
      }
    } else {
      return false;
    }
  }

  return true;
};

var ransomNote = "aa",
    magazine = "aab";
console.log(canConstruct(ransomNote, magazine));
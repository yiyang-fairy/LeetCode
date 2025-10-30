/**
 * 给你一个字符串 s ，请你返回满足以下条件且出现次数最大的 任意 子串的出现次数：

子串中不同字母的数目必须小于等于 maxLetters 。
子串的长度必须大于等于 minSize 且小于等于 maxSize 。
 

示例 1：

输入：s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
输出：2
解释：子串 "aab" 在原字符串中出现了 2 次。
它满足所有的要求：2 个不同的字母，长度为 3 （在 minSize 和 maxSize 范围内）。
示例 2：

输入：s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
输出：2
解释：子串 "aaa" 在原字符串中出现了 2 次，且它们有重叠部分。
示例 3：

输入：s = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3
输出：3
示例 4：

输入：s = "abcde", maxLetters = 2, minSize = 3, maxSize = 3
输出：0
 

提示：

1 <= s.length <= 10^5
1 <= maxLetters <= 26
1 <= minSize <= maxSize <= min(26, s.length)
s 只包含小写英文字母。
 */

const maxFreq = function (s, maxLetters, minSize, maxSize) {
    const cntStr = new Map();
    const cntChar = new Array(26).fill(0);
    let kinds = 0; // 不同字母的数目
    let ans = 0;
    
    for (let i = 0; i < s.length; i++) {
        // 1. 进入窗口
        const inIndex = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (cntChar[inIndex] === 0) {
            kinds++;
        }
        cntChar[inIndex]++;
        
        const left = i - minSize + 1;
        if (left < 0) { // 窗口大小不足 minSize
            continue;
        }
        
        // 2. 更新统计量
        if (kinds <= maxLetters) {
            const substr = s.substring(left, i + 1);
            const count = (cntStr.get(substr) || 0) + 1;
            cntStr.set(substr, count);
            ans = Math.max(ans, count);
        }
        
        // 3. 离开窗口，为下一个循环做准备
        const outIndex = s[left].charCodeAt(0) - 'a'.charCodeAt(0);
        cntChar[outIndex]--;
        if (cntChar[outIndex] === 0) {
            kinds--;
        }
    }
    return ans;
};

const maxFreq1 = function (s, maxLetters, minSize, maxSize) {
  const str = new Map()
  const char = Array(26).fill(0)
  let ans = 0
  let kinds = 0
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    if (char[index] === 0) {
      kinds++
    } 
    char[index]++

    const left = i - minSize + 1
    if (left < 0) {
      continue
    }

    if (kinds <= maxLetters) {
      const curr = s.substring(left, i + 1)
      const num = str.get(curr) || 0
      str.set(curr, num + 1)
      ans = Math.max(ans, num + 1)
    }

    const leftIndex = s[left].charCodeAt(0) - 'a'.charCodeAt(0);
    char[leftIndex]--
    if (char[leftIndex] === 0) {
      kinds --
    }
  }

  return ans
}

// 测试用例
console.log("示例1:", maxFreq1("aababcaab", 2, 3, 4)); // 预期输出: 2
console.log("示例2:", maxFreq1("aaaa", 1, 3, 3)); // 预期输出: 2  
console.log("示例3:", maxFreq1("aabcabcab", 2, 2, 3)); // 预期输出: 3
console.log("示例4:", maxFreq1("abcde", 2, 3, 3)); // 预期输出: 0
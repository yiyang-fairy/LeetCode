/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

 

示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：

输入：n = 1, k = 1
输出：[[1]]
 */

var combine = function (n, k) {
  const result = []

  const backstack = (path, start) => {
    if (k === path.length) {
      result.push([...path])
      return 
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backstack(path, i + 1)
      path.pop()
    }
  }

  backstack([], 1)
  return result
};

const n = 4, k = 2
console.log(combine(n, k))
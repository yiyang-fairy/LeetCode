/**
 * 给你一个由正整数组成的 m x n 矩阵 grid。你的任务是判断是否可以通过 一条水平或一条垂直分割线 将矩阵分割成两部分，使得：

分割后形成的每个部分都是 非空 的。
两个部分中所有元素的和 相等 。
如果存在这样的分割，返回 true；否则，返回 false。

 

示例 1：

输入： grid = [[1,4],[2,3]]

输出： true

解释：



在第 0 行和第 1 行之间进行水平分割，得到两个非空部分，每部分的元素之和为 5。因此，答案是 true。

示例 2：

输入： grid = [[1,3],[2,4]]

输出： false

解释：

无论是水平分割还是垂直分割，都无法使两个非空部分的元素之和相等。因此，答案是 false。

 
 */

const canPartitionGrid = function (grid) {

  if (!grid || grid.length === 0) {
    return false
  }
  const row = grid.length
  const col = grid[0].length

  const rowArr = grid.map(item => item.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
  const colArr = []

  for (let i = 0; i < col; i++) {
    let sum = 0;
    for (let j = 0; j < row; j++) {
      sum += grid[j][i]
    }
    colArr.push(sum)
  }

  const find = (arr) => {
    let left = 0
    let right = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    for (let i = 1; i < arr.length; i++) {
      const curr = arr[i - 1]

      left = left + curr
      right = right - curr
      if (left === right) {
        return true
      }

      if (left > right) {
        return false
      }
    }

    return false
  }

  return (row > 1 && find(rowArr)) || (col > 1 && find(colArr))
  
};

const grid = [[1, 3], [2, 4]]

console.log(canPartitionGrid(grid))
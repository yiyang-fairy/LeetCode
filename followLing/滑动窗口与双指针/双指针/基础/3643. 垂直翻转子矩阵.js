/**
 * 给你一个 m x n 的整数矩阵 grid，以及三个整数 x、y 和 k。

整数 x 和 y 表示一个 正方形子矩阵 的左上角下标，整数 k 表示该正方形子矩阵的边长。

你的任务是垂直翻转子矩阵的行顺序。

返回更新后的矩阵。

示例 1：

输入： grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3

输出： [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]

解释：

上图展示了矩阵在变换前后的样子。

示例 2：

输入： grid = [[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2

输出： [[3,4,4,2],[2,3,2,3]]

解释：

上图展示了矩阵在变换前后的样子。

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 50
1 <= grid[i][j] <= 100
0 <= x < m
0 <= y < n
1 <= k <= min(m - x, n - y)
 */

/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
const reverseSubmatrix = function (grid, x, y, k) {
  let i = x
  let j = x + k - 1

  while (i < j) {
    for (let m = 0; m < grid[0].length; m++) {
      if (m >= y && m < y + k) {
        [grid[i][m], grid[j][m]] = [grid[j][m], grid[i][m]]
      }
    }
    i++
    j--
  }

  return grid
};


console.log('测试用例1', reverseSubmatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 1, 0, 3));  //[[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]
console.log('测试用例2', reverseSubmatrix([[3, 4, 2, 3], [2, 3, 4, 2]], 0, 2, 2));  //[[3,4,4,2],[2,3,2,3]]
console.log('测试用例3', reverseSubmatrix([[4, 20, 8, 20], [2, 16, 3, 12], [3, 12, 17, 1], [3, 13, 2, 13]], 1, 1, 1));  //[[4,20,8,20],[2,16,3,12],[3,12,17,1],[3,13,2,13]]
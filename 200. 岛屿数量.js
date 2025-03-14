/**
 * 200. 岛屿数量
中等
相关标签
相关企业
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 */

const numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  
  let count = 0;
  const row = grid.length;
  const col = grid[0].length;

  const dfs = (i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= col) {
      return;
    }
    if (grid[i][j] === '0' || grid[i][j] === '2') {
      return;
    }
    grid[i][j] = '2';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        count++; 
        dfs(i, j);
      }
    }
  }
  
  return count;
};

// 测试用例
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];

const res = numIslands(grid);
console.log("res: ", res);
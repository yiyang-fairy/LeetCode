/**
 * 2658. 网格图中鱼的最大数目
中等
相关标签
相关企业
提示
给你一个下标从 0 开始大小为 m x n 的二维整数数组 grid ，其中下标在 (r, c) 处的整数表示：

如果 grid[r][c] = 0 ，那么它是一块 陆地 。
如果 grid[r][c] > 0 ，那么它是一块 水域 ，且包含 grid[r][c] 条鱼。
一位渔夫可以从任意 水域 格子 (r, c) 出发，然后执行以下操作任意次：

捕捞格子 (r, c) 处所有的鱼，或者
移动到相邻的 水域 格子。
请你返回渔夫最优策略下， 最多 可以捕捞多少条鱼。如果没有水域格子，请你返回 0 。

格子 (r, c) 相邻 的格子为 (r, c + 1) ，(r, c - 1) ，(r + 1, c) 和 (r - 1, c) ，前提是相邻格子在网格图内。

 

示例 1：



输入：grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
输出：7
解释：渔夫可以从格子 (1,3) 出发，捕捞 3 条鱼，然后移动到格子 (2,3) ，捕捞 4 条鱼。
示例 2：



输入：grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
输出：1
解释：渔夫可以从格子 (0,0) 或者 (3,3) ，捕捞 1 条鱼。
 */

const findMaxFish = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  const row = grid.length;
  const col = grid[0].length;

  let res = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= row || y < 0 || y >= col ) {
      return 0;
    }
    if (grid[x][y] === -1 || grid[x][y] === 0) {
      return 0;
    }

    let count = grid[x][y]
    grid[x][y] = -1

    return count + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1)
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] > 0) {
        res = Math.max(res, dfs(i, j))
      }
    }
  }

  return res;
};

const grid = [
  [0, 2, 1, 0],
  [4, 0, 0, 3],
  [1, 0, 0, 4],
  [0, 3, 2, 0]]

console.log(findMaxFish(grid))
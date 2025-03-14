/**
 * 463. 岛屿的周长
简单
相关标签
相关企业
给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

 

示例 1：



输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
输出：16
解释：它的周长是上面图片中的 16 个黄色的边
示例 2：

输入：grid = [[1]]
输出：4
示例 3：

输入：grid = [[1,0]]
输出：4
 */

const islandPerimeter = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  const row = grid.length;
  const col = grid[0].length;

  let res = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) {
      return 1;
    }
    if (grid[x][y] === 2) {
      return 0;
    }

    grid[x][y] = 2
    let side = 0;
    side += dfs(x + 1, y);
    side += dfs(x - 1, y);
    side += dfs(x, y + 1);
    side += dfs(x, y - 1);
    return side
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        res += dfs(i, j);
      }
    }
  }

  return res;
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]]

console.log(islandPerimeter(grid))
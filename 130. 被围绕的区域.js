/**
 * 130. 被围绕的区域
中等
相关标签
相关企业
给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域：

连接：一个单元格与水平或垂直方向上相邻的单元格连接。
区域：连接所有 'O' 的单元格来形成一个区域。
围绕：如果您可以用 'X' 单元格 连接这个区域，并且区域中没有任何单元格位于 board 边缘，则该区域被 'X' 单元格围绕。
通过 原地 将输入矩阵中的所有 'O' 替换为 'X' 来 捕获被围绕的区域。你不需要返回任何值。

 

示例 1：

输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

解释：


在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。

示例 2：

输入：board = [["X"]]

输出：[["X"]]
 */

const solve = function (board) {
  if (!board || board.length === 0 || board.length === 1) {
    return board;
  }
  const row = board.length;
  const col = board[0].length;

  const dfs = (x, y) => {
    if (x < 0 || x >= row || y < 0 || y >= col) {
      return 0;
    }
    if (board[x][y] === 'A' || board[x][y] === 'X') {
      return 0;
    }
    
    board[x][y] = 'A'
    
    dfs(x, y + 1);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x - 1, y);
  }

  for (let i = 0; i < row - 1; i++) {
    if (board[i][0] === 'O') {
      dfs(i, 0)
    }

    if (board[i][col - 1] === 'O') {
      dfs(i, col - 1)
    }
  }

  for (let j = 0; j < col; j++) {
    if (board[0][j] === 'O') {
      dfs(0, j)
    }

    if (board[row - 1][j] === 'O') {
      dfs(row - 1, j)
    }
  }

  console.log('dfs: ', board)

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }

      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      }
    }
  }
};

// const board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]

const board = [["X","O","X"],["X","O","X"],["X","O","X"]]
solve(board)
console.log(board)
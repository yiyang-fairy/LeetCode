/**
 * 419. 棋盘上的战舰
中等
相关标签
相关企业
给你一个大小为 m x n 的矩阵 board 表示棋盘，其中，每个单元格可以是一艘战舰 'X' 或者是一个空位 '.' ，返回在棋盘 board 上放置的 舰队 的数量。

舰队 只能水平或者垂直放置在 board 上。换句话说，舰队只能按 1 x k（1 行，k 列）或 k x 1（k 行，1 列）的形状放置，其中 k 可以是任意大小。两个舰队之间至少有一个水平或垂直的空格分隔 （即没有相邻的舰队）。

 

示例 1：


输入：board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
输出：2
示例 2：

输入：board = [["."]]
输出：0
 */

const countBattleships = function (board) {
  
  if (!board || board.length === 0) {
    return 0;
  }
  const row = board.length;
  const col = board[0].length;

  let res = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= row || y < 0 || y >= col) {
      return;
    }
    if (board[x][y] === '.' || board[x][y] === 'O') {
      return;
    }

    board[x][y] = 'O'

    dfs(x + 1, y);
    dfs(x, y + 1);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'X') {
        res++;
        dfs(i, j);
      }
    }
  }

  return res;

}; 

const board = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]

console.log(countBattleships(board))
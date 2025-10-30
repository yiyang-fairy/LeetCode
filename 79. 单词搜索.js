/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中"相邻"单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例 1：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
示例 3：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
 */

const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;
  
  const backtrack = (x, y, index) => {
    if (index === word.length - 1) {
      return true
    }
    
    if (x < 0 || y < 0 || x >= row || y >= col) {
      return false
    }
    if (board[x][y] !== word[index] || index > word.length) {
      return false
    }
    
    let temp = board[x][y] 
    board[x][y] = "#" 
    
    for (const [dx, dy] of direction) {
      if(backtrack(x + dx, y + dy, index + 1)) {
        return true
      }
    }
    board[x][y] = temp
    return false
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0] && backtrack(i, j, 0)) {
        return true
      }
    }
  }
  
  return false;
};

const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
console.log(exist(board, word))
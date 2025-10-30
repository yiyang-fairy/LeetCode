/**
 * 212. 单词搜索 II
困难
相关标签
相关企业
提示
给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。

单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中"相邻"单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

 

示例 1：


输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
示例 2：


输入：board = [["a","b"],["c","d"]], words = ["abcb"]
输出：[]



 */

// 字典树节点
class TrieNode {
  constructor() {
    this.children = {}
    this.word = null
  }
}

// 构建字典树
function buildTrie(words) {
  const root = new TrieNode()
  for (const word of words) {
    let node = root
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.word = word
  }
  return root
}

const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
var findWords = function (board, words) {
  if (board.length === 0 || words.length === 0) {
    return []
  }

  const result = new Set()
  const row = board.length
  const col = board[0].length
  
  // 构建字典树
  const root = buildTrie(words)

  const backtrack = (x, y, node) => {
    if (node.word) {
      result.add(node.word)
    }

    if (x < 0 || y < 0 || x >= row || y >= col) {
      return
    }

    const char = board[x][y]
    const nextNode = node.children[char]
    if (!nextNode) {
      return
    }

    board[x][y] = '#'
    for (const [dx, dy] of direction) {
      backtrack(x + dx, y + dy, nextNode)
    }
    board[x][y] = char
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      backtrack(i, j, root)
    }
  }

  return Array.from(result)
};

// const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]

// const board = [["a", "b", "c"], ["a", "e", "d"], ["a", "f", "g"]], words = ["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"]

const board = [["a","a"]], words = ["aaa"]

console.log(findWords(board, words))
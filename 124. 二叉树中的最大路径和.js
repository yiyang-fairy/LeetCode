/**
 * 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

 

示例 1：


输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
示例 2：


输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 */

//  left.val + val + right.val  => max(left.val) + val + max(right.val)

const maxPath = function (root) {

  if (!root) {
    return 0
  }

  let max = 0

  const dfs = (root, sum) => {
    if (!root) {
      return
    }
    const { val, left, right } = root

    sum += val
    max = Math.max(max, sum)

    dfs(left, sum)
    dfs(right, sum) 
  }
  dfs(root, 0)
  return  max
};

const maxPathSum = function (root) {

  let max = -Infinity

  const dfs = (root) => {
    if (!root) {
      return 0
    }

    const { val, left, right } = root
    const sum = val + maxPath(left) + maxPath(right)
    max = Math.max(max, sum)

    dfs(left)
    dfs(right)
  }

  dfs(root)

  return max

};


// 解法二

const maxPathSum1 = function (root) {

  let max = -Infinity

  const dfs = (root) => {
    if (!root) {
      return 0
    }

    const left = dfs(root.left)
    const right = dfs(root.right)
    const sum = root.val + left + right
    max = Math.max(max, sum)

    const outputMaxSum = root.val + Math.max(0, left, right); 

    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }

  dfs(root)
  return max
};
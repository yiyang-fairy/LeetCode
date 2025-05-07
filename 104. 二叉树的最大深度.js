/**
 * 给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：3

示例 2：
输入：root = [1,null,2]
输出：2
 */

// 定义二叉树节点
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const maxDepth = function (root) {
  if (!root) {
      return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1  
};

// 测试用例1: [3,9,20,null,null,15,7]
const root1 = new TreeNode(3)
root1.left = new TreeNode(9)
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)
console.log('测试用例1结果:', maxDepth(root1)) // 预期输出: 3

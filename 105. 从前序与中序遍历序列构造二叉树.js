/**
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
示例 2:

输入: preorder = [-1], inorder = [-1]
输出: [-1]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
const buildTree = function (preorder, inorder) {
  
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const rootValue = preorder[0];
  const root = new TreeNode(rootValue);
  const indexInInorder = inorder.indexOf(rootValue)
  const leftInorder = inorder.slice(0, indexInInorder)
  const rightInorder = inorder.slice(indexInInorder + 1)

  root.left = buildTree(preorder.slice(1, leftInorder.length + 1), leftInorder)
  root.right = buildTree(preorder.slice(leftInorder.length + 1), rightInorder)

  return root;
}; 

const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]

console.log(buildTree(preorder, inorder))
/**
 * 
代码


测试用例
测试结果
测试结果
106. 从中序与后序遍历序列构造二叉树
中等
相关标签
相关企业
给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

 

示例 1:


输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
输出：[3,9,20,null,null,15,7]
 */

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
const buildTree = function (inorder, postorder) {

  //  中序 => 左 中 右   后序 => 左 右 中

  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }

  const rootValue = postorder[postorder.length - 1]
  const root = new TreeNode(rootValue)
  const inorderIndex = inorder.indexOf(rootValue)

  const leftInorder = inorder.slice(0, inorderIndex)
  const rightInorder = inorder.slice(inorderIndex + 1)


  root.left = buildTree(leftInorder, postorder.slice(0, leftInorder.length))
  root.right = buildTree(rightInorder, postorder.slice(leftInorder.length, postorder.length - 1))

  return root;
};

const inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]

console.log(buildTree(inorder, postorder))
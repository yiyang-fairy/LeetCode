/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

示例 1：


输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：


输入：root = [1,2,2,null,3,null,3]
输出：false
 */

const isSymmetric = function (root) {

  const compare = (left, right) => {
    if (!left && !right) {
      return true
    }
    if (!left || !right || left.val !== right.val) {
      return false
    }
    if (left === right && left.left === right.right && left.right === right.left) {
      return true
    }

    return compare(left.left, right.right) && compare(left.right, right.left)
  }
  return compare(root.left, root.right)
};
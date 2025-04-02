/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
 

示例 1：


输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [0]
输出：[0]
 

提示：

树中结点数在范围 [0, 2000] 内
-100 <= Node.val <= 100
 

进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  //  root 的左子树变为右子树, 右子树变为左子树的右子树
  if (root == null ) {
    return null
  }

  if( root.left == null && root.right == null) {
    return root
  }

  if( root.left == null) {
    root.right = flatten(root.right)
    return root
  }

  if( root.right == null) {
    root.right = flatten(root.left)
    root.left = null
    return root
  }
  

  const right = root.right
  root.right = flatten(root.left)

  let current = root
  while(current.right != null) {
    current = current.right
  }

  current.right = flatten(right)
  root.left = null
  
  
  
  return root
  
};
// 对于当前节点，找到其左子树的最右节点（前驱节点）
// 将前驱节点的右指针指向当前节点的右子树
// 将当前节点的右指针指向左子树
// 将左子树置为 null
// 移动到右子树继续处理
const flatten1 = (root) => {
  if (!root) {
    return null
  }

  while (root) {
    if (!root.left) {
      root = root.right
      continue;
    }
    let current = root.left
    while (current.right) {
       current = current.right
    }
    
    current.right = root.right
    root.right = root.left
    root.left = null

  }

  return root
}

const root = [1, 2, 5, 3, 4, null, 6]

console.log(flatten1(root))
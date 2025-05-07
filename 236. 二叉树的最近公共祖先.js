/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为："对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。"

 

示例 1：


输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
示例 2：


输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
示例 3：

输入：root = [1,2], p = 1, q = 2
输出：1
 */

const lowestCommonAncestor = function (root, p, q) {
  let pathP = null, pathQ = null;
  const path = [];

  function dfs(node) {
    if (!node) return;
    path.push(node);
    if (node === p) pathP = Array.from(path);
    if (node === q) pathQ = Array.from(path);
    if (pathP && pathQ) {
      path.pop();
      return;
    }
    dfs(node.left);
    dfs(node.right);
    path.pop();
  }

  dfs(root);

  if (!pathP || !pathQ) return null;

  let i = 0;
  while (i < pathP.length && i < pathQ.length && pathP[i] === pathQ[i]) {
    i++;
  }
  return pathP[i - 1];
};

// 测试用例
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// 测试用例1：示例1
console.log('测试用例1：p=5, q=1');
const root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(0);
root1.right.right = new TreeNode(8);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
console.log('res', lowestCommonAncestor(root1, 5, 1))

// 测试用例2：示例2
console.log('\n测试用例2：p=5, q=4');
const root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(2);
root2.right.left = new TreeNode(0);
root2.right.right = new TreeNode(8);
root2.left.right.left = new TreeNode(7);
root2.left.right.right = new TreeNode(4);
console.log('res', lowestCommonAncestor(root2, 5, 4))

// 测试用例3：示例3
console.log('\n测试用例3：p=1, q=2');
const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
console.log('res', lowestCommonAncestor(root3, 1, 2))

// 测试用例4：空树
console.log('\n测试用例4：空树');
console.log('res', lowestCommonAncestor(null, 1, 2))


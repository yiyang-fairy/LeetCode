/**
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层（从第 0 层开始），则该层包含 1~ 2h 个节点。

 

示例 1：


输入：root = [1,2,3,4,5,6]
输出：6
示例 2：

输入：root = []
输出：0
示例 3：

输入：root = [1]
输出：1
 */

const countNodes = function (root) {
  if (!root) {
    return 0
  }

  let left = root
  let level = 1
 
  while (left.left) {
    level++
    left = left.left
  }

  let count = 1
  const dfs = (root, l) => {
    if (!root) {
      return
    }

    if (l <= level) {
      count++
    }
    dfs(root.left, l + 1)
    dfs(root.right, l + 1)
  }


  dfs(root, 1)

  console.log({level, count})

  return count - 1

}
  

class Node {
  constructor(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6)))
// const root = new Node(1, new Node(2))


console.log(countNodes(root))
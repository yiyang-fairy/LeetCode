/**
 * 给定一个二叉树：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。

初始状态下，所有 next 指针都被设置为 NULL 。

 

示例 1：


输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。
示例 2：

输入：root = []
输出：[]
 */

const connect = function (root) {
  if (!root) {
    return null
  }

  const dfs = (root) => {
    if (!root) {
      return 
    }
    const left = root.left
    const right = root.right

    const getRight = (root) => {
      if (!root) return null
      let rootCopy = root
      while (rootCopy) {
        if (rootCopy.left || rootCopy.right) {
          return rootCopy.left || rootCopy.right
        }
        rootCopy = rootCopy.next
      }
      return null
    }

    if (left) {
      left.next = right || getRight(root.next) || null
    }
    if (right) {
      right.next = getRight(root.next) || null
    }

    dfs(right)
    dfs(left)
  }

  dfs(root)
  return root
};

// 测试用例
function createTree(arr) {
  if (!arr.length) return null;
  const root = new Node(arr[0]);
  const queue = [root];
  let i = 1;
  
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new Node(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new Node(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// 定义二叉树节点
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

// 测试用例1：示例1
const test1 = createTree([1,2,3,4,5,null,7]);
console.log('测试用例1结果：', connect(test1));

// 测试用例2：空树
const test2 = createTree([]);
console.log('测试用例2结果：', connect(test2));

// 测试用例3：只有左子树的树
const test3 = createTree([1,2,null,3]);
console.log('测试用例3结果：', connect(test3));

// 测试用例4：只有右子树的树
const test4 = createTree([1,null,2,null,3]);
console.log('测试用例4结果：', connect(test4));
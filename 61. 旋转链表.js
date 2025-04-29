/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 

示例 1：


输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
示例 2：


输入：head = [0,1,2], k = 4
输出：[2,0,1]
 */

class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const rotateRight = function (head, k) {
  // 处理特殊情况
  if (!head || !head.next || k === 0) return head;
  
  let len = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    len++;
  }

  const n = k % len;
  if (n === 0) return head;

  curr = head;
  for (let i = 0; i < len - n - 1; i++) {
    curr = curr.next;
  }

  const newHead = curr.next;
  curr.next = null;
  
  curr = newHead;
  while (curr.next) {
    curr = curr.next;
  }
  
  curr.next = head;
  
  return newHead;
};

console.log(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2))
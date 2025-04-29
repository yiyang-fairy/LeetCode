/**
 * 
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
const removeNthFromEnd = function (head, n) {
  

  if(!head ) {
    return head
  }

  let dummy = new ListNode(0)
  dummy.next = head

  let fast = dummy
  let slow = dummy

  for (let i = 0; i < n + 1; i++) {
    
    if(!fast) {
      return head
    }
    fast = fast.next
  }

  while(fast) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return dummy.next
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const n = 2;
const result = removeNthFromEnd(head, n);
console.log(result);


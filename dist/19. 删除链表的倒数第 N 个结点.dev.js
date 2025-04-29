"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var ListNode = function ListNode() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, ListNode);

  this.val = val;
  this.next = next;
};

var removeNthFromEnd = function removeNthFromEnd(head, n) {
  if (!head) {
    return head;
  }

  var dummy = new ListNode(0);
  dummy.next = head;
  var fast = dummy;
  var slow = dummy;

  for (var i = 0; i < n + 1; i++) {
    if (!fast) {
      return head;
    }

    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

var head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
var n = 2;
var result = removeNthFromEnd(head, n);
console.log(result);
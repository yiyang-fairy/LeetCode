"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：


输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
 */
var ListNode = function ListNode() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, ListNode);

  this.val = val;
  this.next = next;
};

function reverseBetween(head, left, right) {
  if (!head || !head.next || left === right) {
    return head;
  }

  var dummy = new ListNode(0);
  dummy.next = head;
  var pre = dummy;

  for (var i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  var start = pre.next;
  var then = start.next;

  for (var _i = 0; _i < right - left; _i++) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }

  return dummy.next;
} // 创建链表 3 -> 5


var node5 = new ListNode(5);
var head = new ListNode(3, node5); // 反转链表中从位置 1 到位置 2 的部分

var left = 1;
var right = 2;
var reversedHead = reverseBetween(head, left, right); // 输出结果

var current = reversedHead;

while (current) {
  console.log(current.val);
  current = current.next;
}
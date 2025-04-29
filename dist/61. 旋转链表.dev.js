"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 

示例 1：


输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
示例 2：


输入：head = [0,1,2], k = 4
输出：[2,0,1]
 */
var ListNode = function ListNode(val, next) {
  _classCallCheck(this, ListNode);

  this.val = val;
  this.next = next;
};

var rotateRight = function rotateRight(head, k) {
  // 处理特殊情况
  if (!head || !head.next || k === 0) return head;
  var len = 0;
  var curr = head;

  while (curr) {
    curr = curr.next;
    len++;
  }

  var n = k % len;
  if (n === 0) return head;
  curr = head;

  for (var i = 0; i < len - n - 1; i++) {
    curr = curr.next;
  }

  var newHead = curr.next;
  curr.next = null;
  curr = newHead;

  while (curr.next) {
    curr = curr.next;
  }

  curr.next = head;
  return newHead;
};

console.log(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2));
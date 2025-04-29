"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
 

示例 1:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */
var MinStack =
/*#__PURE__*/
function () {
  function MinStack() {
    _classCallCheck(this, MinStack);

    this.stack = [];
    this.minStack = [];
  }

  _createClass(MinStack, [{
    key: "push",
    value: function push(a) {
      if (this.minStack.length === 0 || a < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(a);
      }

      this.stack.push(a);
    }
  }, {
    key: "pop",
    value: function pop() {
      var pop = this.stack.pop();

      if (pop = (_readOnlyError("pop"), this.minStack[this.minStack.length - 1])) {
        this.minStack.pop();
      }
    }
  }, {
    key: "top",
    value: function top() {
      return this.stack[this.stack.length - 1];
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }]);

  return MinStack;
}();

var minStack = new MinStack();
minStack.push(-2);
console.log(minStack);
minStack.push(0);
console.log(minStack);
minStack.push(-3);
console.log(minStack);
minStack.getMin();
console.log(minStack);
minStack.pop();
console.log(minStack);
minStack.top();
console.log(minStack);
minStack.getMin();
console.log(minStack);
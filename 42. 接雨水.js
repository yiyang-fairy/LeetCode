/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：



输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 */

var trap = function (height) {
  let sum = 0;

  // 每一列的雨水量等于, Math.min(他左侧最高点, 他的右侧最高点) -他的高度

  // 分别计算出去所有元素对应的左/右最高点

  const leftMax = height.map((_, index) => Math.max(height[index], height[index - 1] || 0))
  const rightMax = []
  for (let i = height.length - 1; i >= 0; i++) {
    rightMax.push(Math.max(height[i], height[i + 1] || 0))
  }

  console.log({leftMax, rightMax})
    
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(height))
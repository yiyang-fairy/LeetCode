var rotate = function (nums, k) {
  let n = k % nums.length;
  nums.unshift(...nums.splice(-n));
  return nums;
};

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
const nums = [-1, -100, 3, 99],
  k = 2;
console.log(rotate(nums, k));
// [1, 2, 3, 4, 5, 6, 7]  K = 3
// [5, 6, 7, 1, 2, 3, 4]

/*
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
*/

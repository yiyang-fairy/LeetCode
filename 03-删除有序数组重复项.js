var removeDuplicates = function (nums) {
  let i = 0,
    j = 1;
  const len = nums.length;
  while (j < len && i < j) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
    j++;
  }

  return i + 1;
};
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

// console.log(removeDuplicates(nums));

/*

输入：nums = [0,0,1,1,1,1,2,3,3]
输出：7, nums = [0,0,1,1,2,3,3]
解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。

*/
var removeDuplicates2 = function (nums) {
  let l = 2;
  let r = 2;
  // l: 可插入新值的位置
  // r: 当前位置
  const len = nums.length;
  if (len < 3) {
    return nums;
  }
  while (r < len) {
    if (nums[r] != nums[l - 2]) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  return l;
};
console.log(nums, "nums2");

console.log(removeDuplicates2(nums));

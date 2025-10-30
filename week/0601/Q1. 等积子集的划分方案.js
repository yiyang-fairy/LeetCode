/**
 * 给你一个整数数组 nums，其中包含的正整数 互不相同 ，另给你一个整数 target。

请判断是否可以将 nums 分成两个 非空、互不相交 的 子集 ，并且每个元素必须  恰好 属于 一个 子集，使得这两个子集中元素的乘积都等于 target。

如果存在这样的划分，返回 true；否则，返回 false。

子集 是数组中元素的一个选择集合。

 

示例 1：

输入： nums = [3,1,6,8,4], target = 24


3 -> 8, 1 -> 24 6 -> 4 8 -> 3 4 -> 6

输出： true

解释：子集 [3, 8] 和 [1, 6, 4] 的乘积均为 24。因此，输出为 true 。

示例 2：

输入： nums = [2,5,3,7], target = 15

输出： false


解释：无法将 nums 划分为两个非空的互不相交子集，使得它们的乘积均为 15。因此，输出为 false。
 */

const checkEqualPartitions = function (nums, target) {

  const sort = nums.sort((a, b) => b - a)

  const map = new Map()

  for (const n of nums) {
    if (map.has(target / n)) {
      const last = nums.filter(item => item !== n && item !== target / n)
      const total = last.reduce((acc, curr) => acc * curr, 1)
      if (total === target) {
        return true
      } else {
        return false
      }
    }
    map.set(n, target / n)
  }

}
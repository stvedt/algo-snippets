/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let uniqueSet = new Set();
  for (let item of nums) {
    if (uniqueSet.has(item)) return true;
    uniqueSet.add(item);
  }
  return false;
};

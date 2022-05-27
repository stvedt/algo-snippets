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

// Alternative with manual map

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashmap = {};

  if (nums.length <= 0) return false;
  for (num of nums) {
    if (hashmap[num]) {
      return true;
    } else {
      hashmap[num] = 1;
    }
  }
  return false;
};

// clever solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniqueSet = new Set(nums);
  return !(nums.length === uniqueSet.size);
};

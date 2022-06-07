/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// brute force
/*
const twoSum = function(nums, target) {
  for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
      if ( nums[i]+nums[j] === target) return [i, j];
    }
  }
};
*/

var twoSum = function (nums, target) {
  let pairs = {};
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const matchingNumber = target - number;

    if (matchingNumber in pairs) {
      return [pairs[matchingNumber], i];
    }

    pairs[number] = i;
  }
};

console.log(twoSum([2, 5, 7, 11, 15], 9));

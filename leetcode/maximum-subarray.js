/**
 *
 * https://leetcode.com/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // [-2,1,-3,4,-1,2,1,-5,4]

  let highestSum = nums[0]; // sets current highest to first element only
  let tempSum = 0;

  for (number of nums) {
    console.log(number, tempSum);
    if (tempSum < 0) tempSum = 0; // prev temp sum won't contribute when hitting case of next positive number, will be current max stand alone.
    tempSum += number;

    if (tempSum > highestSum) highestSum = tempSum;
    // even if all negatives setting hight to first element will
    // allow us to return highest sum which will be the lowest negative number
  }

  return highestSum;
};

console.log(maxSubArray([-2, -3, -4, -1, -2, -1, -5, -4]));

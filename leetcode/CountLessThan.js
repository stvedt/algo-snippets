// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

let smallerNumbersThanCurrent = function(nums) {
  let storedCounts = []; // could also use object for key value dict. marginally better usage space complexity
  let finalArrCount = [];

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    if (storedCounts[currentValue]) {
      finalArrCount[i] = storedCounts[currentValue];
      continue;
    }
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < currentValue) count++;
    }
    storedCounts[currentValue] = count;
    finalArrCount[i] = count;
  }
  return finalArrCount;
};

// clever
// let smallerNumbersThanCurrent = function(nums) {
//   const sortedNums = [...nums].sort((a, b) => a - b);
//   return nums.map(x => sortedNums.indexOf(x));
// };

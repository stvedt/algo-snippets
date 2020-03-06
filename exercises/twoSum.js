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

function twoSum (nums, target) {
  let sumPair = {}

  for(let i = 0; i < nums.length; i++){
    
    let currentNum = nums[i];
    let matchingNum = target - currentNum;

    
    if(matchingNum in sumPair){
      return [sumPair[matchingNum], i]
    }
    
    sumPair[currentNum] = i;
  }
}


twoSum([2, 5, 7, 11, 15], 9);

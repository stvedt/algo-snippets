// O(n^2) - Quadratic
function maxSubarraySumSlower(array, length) {
  let highestSum = 0; // might want to better account for negative values with -Infinity

  if (length > array.length) {
    return null;
  }
  // loop through array with a sliding window of length
  for (let i = 0; i < array.length - (length - 1); i++) {
    let sum = 0;
    for (let j = 0; j < length; j++) {
      sum += array[i + j];
    }
    // store the current highest sum
    // store index of start of highest sum
    if (sum > highestSum) highestSum = sum;
  }
  return highestSum;
}

// O(n)
function maxSubarraySum(array, length) {
  let tempSum = 0;
  let highestSum = 0; // might want to better account for negative values with -Infinity

  if (length > array.length) return null;

  // loop through array with a sliding window of length
  for (let i = 0; i < length; i++) {
    tempSum += array[i];
  }

  highestSum = tempSum;

  /* --- first loop with one improvement
  for(let i=1; i < array.length - length; i++){
      tempSum -= array[i-1];
      tempSum += array[i + (length-1)];
//       tempSum = tempSum - array[i-1] + (array[i + (length-1)])
      if(tempSum > highestSum) highestSum = tempSum;
  }
*/
  // Final loop a bit more readable shifting i location
  for (let i = length; i < array.length; i++) {
    tempSum = tempSum - array[i - length] + array[i];
    if (tempSum > highestSum) highestSum = tempSum;
  }
  return highestSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) // 17

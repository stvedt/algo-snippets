// returns the digit at a particular location in a number
function getDigit(num, digit){
  //convert to string to access location by index
//   const numString = '' + num;
//   const digitVal = 0 + numString[digit + 1];
//   return digitVal;

  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function digitCount(num){
  //convert to string to access location by index
//   const numString = '' + num;
//   return numString.length;

  // accounts for negative numbs
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for(let i=0; i<nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// getDigit(1234, 3);
// digitCount(3333);
// mostDigits([123,1,1,22,444]);

function radixSort(nums){
  let maxDigits = mostDigits(nums);

  //loop over digits
  for(let i=0; i < maxDigits; i++){
    // let tempArr = [[],[],[],[],[],[],[],[],[],[]];
    let tempArr = Array.from({length: 10}, () => []);
    //loop over all nums to check digit
    for(let j=0; j< nums.length; j++){

      const currDigit = getDigit(nums[j], i);
      console.log(currDigit);
      tempArr[currDigit].push(nums[j])
    }
    console.log('-----');
    console.log(tempArr);
    console.log('-----');
    nums = tempArr.flat()
  }
  return nums;
}


radixSort([1000, 5000, 123,1,1,22,444,123]);

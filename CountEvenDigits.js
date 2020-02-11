// count number of arrary numbers that have an even length of digits

function countEvenNumbers(nums) {
    let counter = 0;
    for( eachNum of nums){
      
      let numString = '' + eachNum; // coerce num to string to count digits
      if(numString.length % 2 === 0) counter ++;
    }
  
  return counter;
};

countEvenNumbers([1,2,33,555,5555,9])

function insertionSort(arr){
  function insert(start, check){
    arr[start-1] = arr[check];
  }

  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];

    for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
      // console.log('compare', currentVal, ' to sorted ', arr[j] );
      arr[j+1] = arr[j]
      arr[j] = currentVal;
      console.log('-------')
    }
    
  }
  return arr;
}

// insertionSort([5,10, -1,4,3,1])
// insertionSort([1,2,2,3,4,5,6,0])
insertionSort([8,7,6,5,4,3,2,1])
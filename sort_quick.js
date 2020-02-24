function swap(arr, i, j){
  let temp = arr[i]
  arr[i] = arr[j];
  arr[j] = temp;
}


function pivot(arr, start = 0, end = arr.length-1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  // Final swap of the starting num with the swapPoint
  swap(arr, start, swapIndex);
  return swapIndex;
}


function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])




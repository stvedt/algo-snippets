function bubbleSort(arr){
  function swap(index1, index2){
    const temp1 = arr[index1];
    const temp2 = arr[index2];
    arr[index1] = temp2;
    arr[index2] = temp1;
  }

  for(let end= arr.length-1; end>0; end--){
    for(let j=0; j < end; j++){
        if(arr[j] > arr[j+1]) swap(j, j+1);
     }
     console.log('one pass');
  }
  return arr;
}

// bubbleSort([5,4,3,2,1])


function bubbleSortOptimized(arr){
  function swap(index1, index2){
    const temp1 = arr[index1];
    const temp2 = arr[index2];
    arr[index1] = temp2;
    arr[index2] = temp1;
  }

  let swaps;
  for(let end= arr.length-1; end>0; end--){
    swaps = false;
    for(let j=0; j < end; j++){
        if(arr[j] > arr[j+1]){
          swap(j, j+1);
          swaps = true;
        }
     }
     console.log('one pass');
     if(!swaps) break;

  }
  return arr;
}

//bubbleSortOptimized([5,4,3,2,1])
//bubbleSortOptimized([5,1,2,3,4,5]);
bubbleSort([5,1,2,3,4,5]);

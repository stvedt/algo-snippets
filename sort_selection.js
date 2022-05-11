function selectionSort(arr) {
  function swap(index1, index2) {
    const temp1 = arr[index1];
    const temp2 = arr[index2];
    arr[index1] = temp2;
    arr[index2] = temp1;
  }

  for (let start = 0; start < arr.length - 1; start++) {
    let minIndex = start;

    for (let i = minIndex + 1; i < arr.length; i++) {
      console.log("comparing:", arr[i], arr[minIndex]);
      if (arr[i] < arr[minIndex]) minIndex = i;
    }

    if (arr[minIndex] !== arr[start]) {
      console.log("swapping", arr[start], arr[minIndex]);
      swap(start, minIndex);
    }
    console.log("one pass");
  }
  return arr;
}

selectionSort([5, 4, 3, 2, 1]);
// selectionSort([5,1,2,3,4]);

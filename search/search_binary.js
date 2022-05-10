const binarySearch = (array, find) => {
  // Assumes Sorted
  let start = 0;
  let end = array.length - 1;
  let middleIndex = Math.floor((start + end) / 2);

  while (array[middleIndex] !== find && start <= end) {
    if (find < array[middleIndex]) {
      end = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }
    middleIndex = Math.floor((start + end) / 2);
  }
  return array[middleIndex] === find ? middleIndex : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11));

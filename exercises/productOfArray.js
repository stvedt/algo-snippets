function productOfArray(arr) {
  if (arr.length === 1) return 1;
  let lastItem = arr.pop();

  return lastItem * productOfArray(arr);
}

// productOfArray([1,2,3,10]) // 60

productOfArray([2, 3, 5, 7, 10]);

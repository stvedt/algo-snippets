// arrar is sorted
// find the first pair of numbers that their sum totals zero
function sumZero(array) {
  let left = 0;
  let right = array.length - 1;
  console.log("run");

  while (left < right) {
    console.log("loop tick", left, right);
    const sum = array[left] + array[right];
    if (sum === 0) {
      return `[${array[left]},${array[right]}]`;
    }
    if (sum < 0) left++;
    if (sum > 0) right--;
  }
  return undefined;
}

sumZero([-3, 0, 3]);
sumZero([-4, 0, 2, 1]);

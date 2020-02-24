// function that accepts two Sorted arrays as parameters and combines them into one
function mergeTwoSortedArr(arr1, arr2){
  let newArray = [];
  let firstCounter= 0;
  let secondCounter= 0;
  
  while(firstCounter < arr1.length && secondCounter < arr2.length){
    if(arr1[firstCounter] <= arr2[secondCounter] ){
      newArray.push(arr1[firstCounter])
      firstCounter++;
    } else {
      newArray.push(arr2[secondCounter]);
      secondCounter++;
    }
  }

  while( firstCounter < arr1.length){
    newArray.push(arr1[firstCounter]);
    firstCounter++
  }

  while( secondCounter < arr2.length){
    newArray.push(arr2[secondCounter]);
    secondCounter++
  }
  return newArray;
}
// mergeTwoSortedArr([1,5,7,9,10,50], [2,3,6,8,11,12,13])

function mergeSort(arr){
  if( arr.length <= 1) return arr;
  let halfwayThrough = Math.floor(arr.length / 2)
  let arrayFirstHalf = mergeSort(arr.slice(0, halfwayThrough));
  let arraySecondHalf = mergeSort(arr.slice(halfwayThrough, arr.length));
  
  return mergeTwoSortedArr(arrayFirstHalf, arraySecondHalf);

}



mergeSort([1,5,3,2,4,1]);
/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //m length of nums1
  //n length of nums2
  for (let i = m, j = 0; i < nums1.length; i++, j++) {
    // i position of end of nums1 values, start of 0,0,0...
    // j clean iteration over entirety of nums2
    nums1[i] = nums2[j];
  }

  nums1 = nums1.sort((a, b) => a - b);

  return nums1;
};
// slightly optimized
var merge = function (nums1, m, nums2, n) {
  if (!n) return;

  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  nums1.sort(function (a, b) {
    // sort uses n log n
    return a - b;
  });
};

// more optimized

var merge = function (nums1, m, nums2, n) {
  let num1ptr = m - 1;
  let num2ptr = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    num1 = nums1[num1ptr];
    num2 = nums2[num2ptr];
    if (num1 > num2 && num1ptr >= 0) {
      nums1[i] = num1;
      num1ptr--;
    } else if (num2ptr >= 0) {
      nums1[i] = num2;
      num2ptr--;
    }
  }

  return nums1;
};

// readability pass

var merge = function (nums1, m, nums2, n) {
  let insertIndex = m + n - 1;
  let num1ptr = m - 1;
  let num2ptr = n - 1;

  while (num1ptr >= 0 && num2ptr >= 0) {
    num1 = nums1[num1ptr];
    num2 = nums2[num2ptr];
    console.log(num1, num2);
    if (num1 > num2) {
      nums1[insertIndex] = num1;
      num1ptr--;
    } else {
      nums1[insertIndex] = num2;
      num2ptr--;
    }
    insertIndex--;
  }

  while (num2ptr >= 0) {
    nums1[insertIndex] = nums2[num2ptr];
    num2ptr--;
    insertIndex--;
  }

  return nums1;
};

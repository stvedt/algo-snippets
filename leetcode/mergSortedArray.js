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
    return a - b;
  });
};

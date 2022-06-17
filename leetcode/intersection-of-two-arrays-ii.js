/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums2
 * @param {number[]} nums2
 * @return {number[]}
 *
 * define intersection further: Intersection is any common elements shared between the two sets of data.
 */
var intersect = function (nums1, nums2) {
  let num1Map = {};
  let num2Map = {};

  for (const num of nums1) {
    if (num1Map[num]) {
      num1Map[num]++;
    } else {
      num1Map[num] = 1;
    }
  }
  for (const num of nums2) {
    if (num2Map[num]) {
      num2Map[num]++;
    } else {
      num2Map[num] = 1;
    }
  }
  let intersections = [];
  for (num in num1Map) {
    console.log(num);
    if (num2Map[num]) {
      // match found - now compare smallest size
      const maxMatches =
        num1Map[num] <= num2Map[num] ? num1Map[num] : num2Map[num];
      for (let index = 0; index < maxMatches; index++) {
        intersections.push(num);
      }
    }
  }

  return intersections;
};

// second pass optimizing below

var intersectOptimized = function (nums1, nums2) {
  let num1Map = {};

  for (num of nums1) {
    if (num1Map[num]) {
      num1Map[num]++;
    } else {
      num1Map[num] = 1;
    }
  }

  let intersections = [];
  for (num of nums2) {
    if (num1Map[num] > 0) {
      // match found - now compare smallest size

      intersections.push(num);
      num1Map[num]--;
    }
  }

  return intersections;
};

console.log(intersectOptimized([1, 2, 2, 1], [2, 2]));

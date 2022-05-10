/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (string1, string2) {
  //short circuit if string lenghts are not the same
  if (string1.length !== string2.length) return false;

  // count the number of characters in each string
  let charCount1 = new Map();
  let charCount2 = new Map();

  // for (const char of string1) {
  //   if (charCount1[char]) {
  //     charCount1[char]++;
  //   } else {
  //     charCount1[char] = 1;
  //   }
  // }

  // for (const char of string2) {
  //   if (charCount2[char]) {
  //     charCount2[char]++;
  //   } else {
  //     charCount2[char] = 1;
  //   }
  // }

  // combined two for loops into one and ternaries
  for (let index = 0; index < string1.length; index++) {
    const char1 = string1[index];
    const char2 = string2[index];
    charCount1.set(
      char1,
      charCount1.has(char1) ? charCount1.get(char1) + 1 : 1
    );
    charCount2.set(
      char2,
      charCount2.has(char2) ? charCount2.get(char2) + 1 : 1
    );
  }

  if (charCount1.size !== charCount2.size) return false; // if maps aren't same size can't be anagram

  // check the count of each string character is the same. order doesn't matter
  for (let item of charCount1) {
    const char = item[0];
    if (charCount1.get(char) !== charCount2.get(char)) {
      return false;
    }
  }
  return true;

  // returns true/false
};

/// Sort solution

const isAnagramBySort = function (string1, string2) {
  const sort1 = [...string1].sort().toString();
  const sort2 = [...string2].sort().toString();

  return sort1 === sort2;
};

// console.log(isAnagram("cinema", "iceman")); //true
// console.log(isAnagram("steve", "svent")); // false
// console.log(isAnagram("rat", "car")); // false

console.log(isAnagramBySort("cinema", "iceman")); //true
console.log(isAnagramBySort("steve", "svent")); // false
console.log(isAnagramBySort("rat", "car")); // false

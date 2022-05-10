/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
  // naive solution
  let longestStringCount = 0;
  let startIdxLongest = 0;
  for (let i = 0; i < s.length; i++) {
    s[i];
    currentStringCount = 0;
    const charCounts = {};
    for (let j = i; j < s.length; j++) {
      if (!charCounts[s[j]]) {
        currentStringCount++;
        charCounts[s[j]] = 1;
        console.log(charCounts);
        if (currentStringCount > longestStringCount) {
          longestStringCount = currentStringCount;
          startIdxLongest = i;
        }
      } else {
        console.log(
          "BREAK Dupe found",
          s[j],
          longestStringCount,
          startIdxLongest
        );
        break;
      }
    }
  }
  let longestString = "";
  for (let i = startIdxLongest; i < startIdxLongest + longestStringCount; i++) {
    longestString = longestString + s[i];
  }

  return longestStringCount;
};

//sliding window solution

const lengthOfLongestSubstringWindow = (inputString) => {
  // initialize pointers
  let longestSubstringCount = 0;
  let currentSubstringCount = 0;
  let charCount = {}; // store values of characters
  //loop
  for (let index = 0; index < inputString.length; index++) {
    const element = inputString[index];
    if (charCount[element]) {
      console.log("dupe found");
      currentSubstringCount = 0;
      charCount = {};
    }

    currentSubstringCount++;
    charCount[element] = 1;
    // console.log("unique", charCount, element, currentSubstringCount);

    if (currentSubstringCount > longestSubstringCount) {
      longestSubstringCount = currentSubstringCount;
    }
    console.log(charCount, element, currentSubstringCount);
  }

  return longestSubstringCount;
};

// console.log(lengthOfLongestSubstringWindow(" "));
// console.log(lengthOfLongestSubstringWindow("abcabcbb"));
// console.log(lengthOfLongestSubstringWindow("bbbbb"));
// console.log(lengthOfLongestSubstringWindow("pwwkew"));
console.log(lengthOfLongestSubstringWindow("dvdf"));

// console.log(lengthOfLongestSubstringWindow("aabccdad"));

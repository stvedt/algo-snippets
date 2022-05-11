// https://leetcode.com/problems/length-of-last-word/submissions/
// The edge cases are the real challenge here. Ending with spaces.

var lengthOfLastWord = function(s) {
  let words = s.split(" ");
  console.log(words);

  lastWordIndex = words.length - 1;

  while (words[lastWordIndex].length === 0 && lastWordIndex > 0)
    lastWordIndex--;

  return words[lastWordIndex].length;
};

lengthOfLastWord("really  ");
lengthOfLastWord("  really  ");
lengthOfLastWord("really pushing this");

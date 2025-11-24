// Leetcode problem 1221 . Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 *  */
var balancedStringSplit = function (s) {
  let balanced = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
        balanced++;
      } else if (s[i] === "L") {
        balanced--;
    }

    if (balanced === 0) {
      count++;
    }
  }

  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));

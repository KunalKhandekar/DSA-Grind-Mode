// Leetcode 541 -> Reverse String II

function reverseStr(s, k) {
  s = s.split("");
  let _2k = 2 * k;
  for (let i = 0; i < s.length; i += _2k) {
    for (let j = 0; j < (k/2); j++) {
      [s[j+i], s[k+i - 1 - j]] = [s[k+i - 1 - j], s[j+i]];
    }
  } 

  return s.join("");
}

console.log(reverseStr("abcdefg", 2));

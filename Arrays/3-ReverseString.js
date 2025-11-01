// Leetcode 344 -> Reverse the string

const s = ["h", "e", "l", "l", "o", "o"];

function reverseString(s) {
  const n = s.length;
  for (let i = 0; i < n/2; i++) {
    [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]];
  }
  return s;
}

console.log(reverseString(s));


// Swapping techniques
const a = 10, b = 20;

// 1. Classic way
let temp;
temp = a;
a = b;
b = temp;

// 2. Array way
[a, b] = [b, a];


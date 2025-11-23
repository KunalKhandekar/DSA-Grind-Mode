// Leetcode 771. Jewels and Stones

// Approach 1 -> Bruteforce approach
function numJewelsInStones1(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] == stones[i]) {
        count++;
      }
    }
  }
  return count;
}

// Approach 2
function numJewelsInStones2(jewels, stones) {
  let jewelSet = new Set(jewels);
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }
  return count;
}
console.log(numJewelsInStones2("aAb", "aAAbbbb"));

// 3541. Find Most Frequent Vowel and Consonant

function maxFreqSum(s) {
  let vowelFreq = {};
  let consonantFreq = {};
  const vowels = new Set("aeiou");
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      vowelFreq[s[i]] = (vowelFreq[s[i]] || 0) + 1;
    } else {
      consonantFreq[s[i]] = (consonantFreq[s[i]] || 0) + 1;
    }
  }
  return (
    Math.max(...Object.values(vowelFreq), 0) +
    Math.max(...Object.values(consonantFreq), 0)
  );
}

console.log(maxFreqSum("succeess"));

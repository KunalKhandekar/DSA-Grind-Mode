// Leetcode 49: Group Anagrams

const groupAnagrams = (strs) => {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    // if (!map[key]) {
    //   map[key] = strs[i];
    // } else {
    //   map[key].push(strs[i]);
    // }
    (map[key] = map[key] || []).push(strs[i]);
  }

  return [...Object.values(map)];
};

const groupAnagramsApproach2 = (strs) => {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    // Create a key
    let freq = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < s.length; j++) {
      let idx = s[j].charCodeAt() - "a".charCodeAt();
      ++freq[idx];
    }
    let key = "";
    for (let i = 0; i < freq.length; i++) {
      key += `#${freq[i]}`;
    }

    (map[key] = map[key] || []).push(strs[i]);
  }

  return [...Object.values(map)];
};


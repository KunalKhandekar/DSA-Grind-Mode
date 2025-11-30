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
    (map[key] = map[key] || []).push(strs[i])
  }

  return [...Object.values(map)];
};

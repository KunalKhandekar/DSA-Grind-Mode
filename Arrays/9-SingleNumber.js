// Leetcode 136 -> Single Number

const nums = [2, 2, 1];

// Approach 1 -> Hash table
function singleNumber1(nums) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
        hashTable[nums[i]] = 1;
    } else {
        hashTable[nums[i]] = hashTable[nums[i]] +1;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if(hashTable[nums[j]] === 1) {
        return nums[j];
    } 

  }
}

// Approach 2 -> Bitwise XOR
function singleNumber2(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }

    return xor;
}

console.log(singleNumber2(nums));
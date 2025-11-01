// Leetcode 26 -> Remove Duplicates from Sorted Array

const nums = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x += 1;
      nums[x] = nums[i];
    }
  }
  return x + 1; // +1 for starting unique number (Eg. 0).
}

console.log(removeDuplicates(nums));
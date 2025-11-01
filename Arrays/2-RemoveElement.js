// Leetcode 27 -> Remove Elements

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

// Time Complexity -> O(n^2)
// If there are multiple val then speed will be slow.
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1); // remove the current index
      i--; // since remove the current index so decreasing to previous
    }
  }
  return nums.length;
}

// Two pointer approach
// Time Complexity -> O(n)
function removeElementTwoPointer(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
        nums[x] = nums[i];
        x++;
    }
  }
  return x;
}

console.log(removeElementTwoPointer(nums, val));

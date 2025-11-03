// Leetcode 485 -> Consecutive Zeros

const nums = [1, 0, 1, 1, 0, 1, 1, 1];

const findMaxConsecutiveOnes = (nums) => {
    let maxCount = 0;
    let currCount = 0;
    for (i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            currCount++;
            maxCount = Math.max(currCount, maxCount);
        } else {
            currCount = 0;
        }
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes(nums));
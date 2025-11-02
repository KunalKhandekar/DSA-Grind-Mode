// Leetcode 283 -> Move Zeros

const nums = [0,1,0, 3, 12];

// Approach 1 -> Move non zero to start and fill zeros at end
function moveZeros1(nums) {
    let p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[p1] = nums[i];
            p1++;
        }
    }
    nums.fill(0, p1); // fill zero from pointer to end
    return nums;
}

// Approach 2 -> Swapping values ( less time )
function moveZeros2(nums) {
    let p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
           [nums[p1], nums[i]] = [nums[i], nums[p1]];
            p1++;
        }
    }
    return nums;
}

// console.log(moveZeros1(nums));
console.log(moveZeros2(nums));

// Leetcode -> 268. Missing Number

const nums = [3, 0, 1];


// Approach 1 -> Time complexity O(n)
function missingNumber1(nums) {
    const n = nums.length;
    let p1 = 0;
    while(p1 <= n) {
        if(nums.indexOf(p1) < 0) {
            break;
        }
        p1++;
    }
    return p1;
}

// Approach 2 -> Sum formula
function missingNumber2(nums) {
    const n = nums.length;
    const actual = (n * (n + 1)) / 2;
    const current = nums.reduce((count, num) => count+num, 0);
    return actual-current;
}

console.log(missingNumber2(nums));
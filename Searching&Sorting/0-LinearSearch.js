/*
Linear Search: 
    1) Iterate each element and check for the target element.
    2) Time complexity in the worst case: O(n)
*/

// Example: 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 3, 565, 454, 445], 445)); // 4
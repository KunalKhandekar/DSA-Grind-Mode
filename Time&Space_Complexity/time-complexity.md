# Time Complexity Guide

![alt text](1_dWet_YU-5072Kcko7LzsuQ.jpg)

## What is Time Complexity?
> Time complexity measures how the number of operations grows as input size increases. It's expressed in **Big O notation**.

## O(1) - Constant Time
**Example:** Accessing an array element by index
```javascript
function getFirstElement(arr) {
    return arr[0];  // Always one operation, regardless of array size
}
```

## O(log n) - Logarithmic Time
**Example:** Binary Search in a sorted array
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}
// Each step cuts the search space in half
```

## O(n) - Linear Time
**Example:** Finding the maximum value in an array
```javascript
function findMax(arr) {
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}
// Must check every element once
```

## O(n log n) - Linearithmic Time
**Example:** Merge Sort
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}
```

## O(n²) - Quadratic Time
**Example:** Bubble Sort
```javascript
function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
}
// Nested loops: n × n operations
```

## O(n³) - Cubic Time
**Example:** Matrix Multiplication
```javascript
function multiplyMatrices(A, B) {
    const n = A.length;
    const result = Array(n).fill(0).map(() => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    return result;
}
// Three nested loops
```

## O(2ⁿ) - Exponential Time
**Example:** Fibonacci (Recursive)
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Each call branches into two more calls
```

## O(n!) - Factorial Time
**Example:** Generating all permutations
```javascript
function getPermutations(arr) {
    if (arr.length <= 1) return [arr];
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPermutations = getPermutations(remaining);
        
        for (const perm of remainingPermutations) {
            result.push([current, ...perm]);
        }
    }
    
    return result;
}
// Generates all possible arrangements
```

## Quick Comparison (n = 100)

| Notation | Operations |
|----------|-----------|
| O(1) | 1 |
| O(log n) | ~7 |
| O(n) | 100 |
| O(n log n) | ~664 |
| O(n²) | 10,000 |
| O(n³) | 1,000,000 |
| O(2ⁿ) | ~10³⁰ |
| O(n!) | ~10¹⁵⁷ |

**Aim for O(1), O(log n), O(n), or O(n log n) whenever possible!**
# Space Complexity Guide

![alt text](space1.png)

## What is Space Complexity?
Space complexity measures the total memory an algorithm uses during execution, including:
- Input data
- Auxiliary variables
- Data structures
- Recursive call stack

It's expressed in **Big O notation** to show memory growth relative to input size.


## O(1) - Constant Space
**Example:** Swapping two variables
```javascript
function swap(a, b) {
    let temp = a;  // Only uses fixed amount of memory
    a = b;
    b = temp;
    return [a, b];
}

function findMax(arr) {
    let max = arr[0];  // Only stores one variable
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}
// Memory usage doesn't grow with input size
```

## O(log n) - Logarithmic Space
**Example:** Binary Search (Iterative)
```javascript
function binarySearch(arr, target) {
    let left = 0;           // O(1) space
    let right = arr.length - 1;  // O(1) space
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);  // O(1) space
        
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}
// Uses only a few variables, but recursive version would use O(log n) stack space
```

**Better Example:** Binary Search (Recursive - uses call stack)
```javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
    return binarySearchRecursive(arr, target, left, mid - 1);
}
// Recursive calls create log(n) stack frames
```

## O(n) - Linear Space
**Example:** Creating a copy of an array
```javascript
function reverseArray(arr) {
    const result = [];  // New array of size n
    
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    
    return result;
}

function fibonacci(n) {
    const fib = [0, 1];  // Stores all n numbers
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib[n];
}
// Memory grows proportionally with input size
```

## O(n log n) - Linearithmic Space
**Example:** Merge Sort
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));    // Creates new arrays
    const right = mergeSort(arr.slice(mid));      // Creates new arrays
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];  // Additional array for merging
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
// Creates O(n) space at each of O(log n) recursion levels
```

## O(n²) - Quadratic Space
**Example:** Creating a 2D matrix
```javascript
function create2DMatrix(n) {
    const matrix = [];
    
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i * n + j;
        }
    }
    
    return matrix;
}

function getAllPairs(arr) {
    const pairs = [];  // Stores n² pairs
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    
    return pairs;
}
// Stores n × n elements
```

## O(n³) - Cubic Space
**Example:** Creating a 3D array
```javascript
function create3DArray(n) {
    const cube = [];
    
    for (let i = 0; i < n; i++) {
        cube[i] = [];
        for (let j = 0; j < n; j++) {
            cube[i][j] = [];
            for (let k = 0; k < n; k++) {
                cube[i][j][k] = i + j + k;
            }
        }
    }
    
    return cube;
}
// Stores n × n × n elements
```

## O(2ⁿ) - Exponential Space
**Example:** Generating all subsets
```javascript
function getAllSubsets(arr) {
    const result = [[]];
    
    for (const element of arr) {
        const length = result.length;
        for (let i = 0; i < length; i++) {
            result.push([...result[i], element]);  // Doubles with each element
        }
    }
    
    return result;
}

// For array [1, 2, 3]:
// Generates: [], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]
// Total: 2^n subsets stored in memory
```

## O(n!) - Factorial Space
**Example:** Storing all permutations
```javascript
function getAllPermutations(arr) {
    if (arr.length <= 1) return [arr];
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPermutations = getAllPermutations(remaining);
        
        for (const perm of remainingPermutations) {
            result.push([current, ...perm]);
        }
    }
    
    return result;  // Stores n! permutations
}

// For array [1, 2, 3]:
// Stores: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
// Total: 3! = 6 permutations
```


## Quick Comparison (n = 10)

| Notation | Memory Units |
|----------|--------------|
| O(1) | 1 |
| O(log n) | ~3 |
| O(n) | 10 |
| O(n log n) | ~30 |
| O(n²) | 100 |
| O(n³) | 1,000 |
| O(2ⁿ) | 1,024 |
| O(n!) | 3,628,800 |


## Time vs Space Trade-off

Some algorithms trade space for time efficiency:
```javascript
// High time, low space - O(n) time, O(1) space
function fibonacciOptimized(n) {
    if (n <= 1) return n;
    
    let prev = 0, curr = 1;
    
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    
    return curr;
}

// Low time, high space - O(n) time, O(n) space
function fibonacciWithArray(n) {
    const fib = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib[n];
}
```

**Key Takeaway:** Optimize for both time AND space when possible. Sometimes you need to choose which is more important for your use case!
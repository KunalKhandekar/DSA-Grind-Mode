/*
What is Merge Sort?

Merge Sort is a (Divide and Conquer) sorting algorithm.
It works by splitting an array into halves, sorting each half recursively, and then merging the two sorted halves together.

It’s one of the most efficient general-purpose sorting algorithms, with a time complexity of O(n log n).

----------- How it Works (Step by Step) -------------

mergeSort([1, 6, 8, 2, 7, 4, 89, 100, 0])

1️⃣ Divide phase:

    We keep dividing the array into two halves until each subarray has one element.

    [1, 6, 8, 2, 7, 4, 89, 100, 0]

    → left: [1, 6, 8, 2]
    → right: [7, 4, 89, 100, 0]

    Keep dividing further:
               [1,6,8,2,7,4,89,100,0]
                  /                  \
          [1,6,8,2]               [7,4,89,100,0]
          /       \               /            \
      [1,6]      [8,2]        [7,4]         [89,100,0]
      /   \      /   \        /   \         /       \
   [1]   [6]  [8]   [2]    [7]  [4]     [89]     [100,0]
                                                  /   \ 
                                                [100] [0]

    Now, every subarray has 1 element (base condition).

2️⃣ Conquer (merge) phase:

    We now merge these small sorted arrays step-by-step.

    Merging happens by comparing elements one by one:

    merge([1], [6]) → [1, 6]
    merge([8], [2]) → [2, 8]
    merge([1, 6], [2, 8]) → [1, 2, 6, 8]

    merge([7], [4]) → [4, 7]
    merge([100], [0]) → [0, 100]
    merge([89], [0, 100]) → [0, 89, 100]
    merge([4, 7], [0, 89, 100]) → [0, 4, 7, 89, 100]

    Finally:
    merge([1, 2, 6, 8], [0, 4, 7, 89, 100]) → [0, 1, 2, 4, 6, 7, 8, 89, 100]

    Sorted array = [0, 1, 2, 4, 6, 7, 8, 89, 100]
*/

// How the Code Works

function mergeSort(arr) {
  let n = arr.length;
  if (n < 2) return arr;  // Base case (array of size 1 is already sorted)

  let mid = Math.floor(n / 2); // Divide the array
  let left = mergeSort(arr.slice(0, mid));  // Recursively sort left half
  let right = mergeSort(arr.slice(mid));    // Recursively sort right half

  return merge(left, right); // Merge two sorted halves
}


// The recursive calls keep dividing until subarrays of 1 element are reached.
// Then they are merged using this helper:


function merge(left, right) {
  const arr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare and merge
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr.push(left[leftIndex++]);
    } else {
      arr.push(right[rightIndex++]);
    }
  }

  // Add remaining elements (if any)
  return [...arr, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

/* 

Time and Space Complexity

Time = O(n log n) -> Each level splits array (log n levels), and each merge takes O(n)
Space =  O(n) -> Because new arrays are created during merging

*/
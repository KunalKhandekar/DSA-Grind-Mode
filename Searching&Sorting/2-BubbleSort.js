/*

Bubble sort is a method to arrange numbers (or items) in order — like smallest to biggest.

How it works (step by step):
    // Look at two numbers next to each other
    // If the first number is bigger, swap their places.
    // Then move to the next pair of numbers.
    // Keep doing this until you reach the end — the biggest number “bubbles” to the end.
    // Repeat the same process again, but this time stop before the last number (since it’s already in the correct place).
    // Continue until no swaps are needed — that means the list is sorted!

*/

// Example

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([47, 8121, 42, 46, 2, 6, 72, 13, 89, 0]))


/*

Selection sort means “select the smallest number and put it in the correct place” — one by one.

It works by dividing the array into two parts:
    - Sorted part (left side)
    - Unsorted part (right side)

Each time, it finds the smallest number in the unsorted part and puts it at the beginning of that part.

So why n - 1 ?
    Let’s see how many passes we needed:
        1st pass: put smallest at 1st position
        2nd pass: put next smallest at 2nd position
        3rd pass: put next smallest at 3rd position
        Now, the 4th element (last one) is automatically correct!
        Because if first 3 are smallest and sorted, the last one must be the biggest.

*/

// Example

function selectionSort(arr) {
  const n = arr.length;   // length of array
  for (let i = 0; i < n; i++) { // loop through each element
    let minIndex = i;  // assume current i is the smallest
    for (let j = i + 1; j < n; j++) { // check remaining elements
      if (arr[j] < arr[minIndex]) {  // if smaller element found
        minIndex = j;  // update smallest element index
      }
    }   
    if (minIndex !== i) {  // if a smaller element was found
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];  // swap them
    }
  }

  return arr; // return sorted array
}

console.log(selectionSort([47, 8121, 42, 46, 2, 6, 72, 13, 89, 0]));

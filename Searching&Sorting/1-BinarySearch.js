/*

Binary Search:
    1) Can only be applied to sorted array.
    2) Cut's down the array into 2 Part.
    3) Work's with two pointer -> starting index, ending index
    4) calculate the middle element by start+end/2 (ignore decimals)
    5) work on three conditions
        -> if (middle element === target) --> target found
        -> if (middle is smaller than target) --> make start index from middle + 1
        -> if (middle is greater than target) -> make the end index from middle - 1; 
    6) Generally prefer using while loop.
    7) Base condition: only run the loop if your ending >= starting.

    8) Time complexity is O(log n)

*/

// Example

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 100], 100));

// Sum of elements in an array

const arr = [1, 2, 3];

const n = arr.length;
function sumofArray(arr, n) {
  if (n < 1) return 0;
  return arr[n - 1] + sumofArray(arr, n - 1); // 5 + 4 + 2
}

console.log(sumofArray(arr, n));

// sum of only odd number in array

const arr2 = [1, 2, 3];

const n1 = arr2.length;
function sumofOdd(arr, n) {
  const isOdd = arr[n - 1] % 2 !== 0;
  if ((n - 1) < 1) {
    if (isOdd) return arr[n - 1];
    return 0;
  }
  if (isOdd) {
    return arr[n - 1] + sumofOdd(arr, n - 1);
  }
  return 0 + sumofOdd(arr, n - 1);
}

console.log(sumofOdd(arr2, n1));

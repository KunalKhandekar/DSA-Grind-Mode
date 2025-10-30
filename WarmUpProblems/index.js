// write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

const arr1 = [4, 2, 0, 10, 8, 30];
const n = 10;

function searchIndex(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }

  return -1;
}

// console.log(searchIndex(arr, n));

// ------------------  Problem 2 ------------------------------------
// Write a function that returns the number of negative numbers in an array

const arr2 = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// console.log(countNegatives(arr2));

// ------------------  Problem 3 ------------------------------------
// Write a function that returns the largest number in an array

const arr3 = [5, 0, 10, 8, 17, 1];
// const arr3 = [-9, -19, -3];

function findLargest(arr) {
  if (arr.length === 0) return undefined;
  let largest = arr[0]; // Or we can use -Infinity
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// console.log(findLargest(arr3));

// ------------------  Problem 4 ------------------------------------
// Write a function that returns the smallest number in an array

const arr4 = [5, 0, 10, 8, 17, 1];
// const arr4 = [-9, -19, -3];

function findSmallest(arr) {
  if (arr.length === 0) return undefined;
  let smallest = arr[0]; // Or we can use Infinity
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

// console.log(findSmallest(arr4));

// ------------------  Problem 5 ------------------------------------
// Write a function that returns the second largest number in an array

const arr5 = [4, 9, 0, 2, 18, 18, 7, 1];

function findSecondLargest(arr) {
  if (arr.length < 2) return "Array must have atleast 2 elements";
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// console.log(findSecondLargest(arr5));




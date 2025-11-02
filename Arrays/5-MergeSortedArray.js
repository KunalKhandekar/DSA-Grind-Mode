// Leetcode 88 -> Merge Sorted Array

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
let nums2 = [2, 5, 6],
  n = 3;

// Approach 1
function merge(nums1, m, nums2, n) {
  let n1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && n1Copy[p1] < nums2[p2])) {
      nums1[i] = n1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  return nums1;
}

// Approach 2
function merge1(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (nums1[p1] > nums2[p2] && p1 >= 0) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}

// Approach 3 -> Easy to understand approach
function merge2(nums1, m, nums2, n) {
  if (n < 1) {
    return;
  }

  let constructorArray = [];
  let nums1Index = 0;
  let nums2Index = 0;
  const validNums1 = nums1.slice(0, m);

  while (nums1Index < m && nums2Index < n) {
    if (validNums1[nums1Index] <= nums2[nums2Index]) {
      constructorArray.push(validNums1[nums1Index]);
      nums1Index++;
    } else {
      constructorArray.push(nums2[nums2Index]);
      nums2Index++;
    }
  }

  while (nums1Index < m) {
    constructorArray.push(validNums1[nums1Index]);
    nums1Index++;
  }

  while (nums2Index < n) {
    constructorArray.push(nums2[nums2Index]);
    nums2Index++;
  }

  nums1.splice(0, nums1.length, ...constructorArray);
}

console.log(merge1(nums1, m, nums2, n));

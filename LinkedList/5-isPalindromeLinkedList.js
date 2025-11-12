// Leetcode 234. Palindrome Linked List

// Approach 1
function isPalindrome1(head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  const n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[n - i - 1]) {
      return false;
    }
  }
  return true;
}

function isPalindrome2(head) {
  // find the middle
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // compare secondhalf and firsthalf
  let firsthalf = head;
  let secondhalf = prev;
  while (secondhalf) {
    if (firsthalf.val !== secondhalf.val) {
      return false;
    }
    firsthalf = firsthalf.next;
    secondhalf = secondhalf.next;
  }

  return true;
}

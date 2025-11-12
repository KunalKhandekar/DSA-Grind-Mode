// Leetcode 141 -> Linked List Cycle

function hasCycle1(head) {
  const setMap = new Set();
  let curr = head;
  while (curr) {
    if (setMap.has(curr)) {
      return true;
    }
    setMap.add(curr);
    curr = curr.next;
  }
  return false;
}

// Approach 2

function hasCycle2(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

// Approach 3
function hasCycle3(head) {
  let ptr = head;

  while (ptr) {
    if (ptr.val == Infinity) return true;

    ptr.val = Infinity;
    ptr = ptr.next;
  }

  return false;
}

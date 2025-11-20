// Leetcode 24 -> Swap Nodes in Pair

function swapPairs(head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let curr = head;
  let next = head.next;

  while (curr && next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;
    prev = curr;
    curr = curr && curr.next;
    next = curr && curr.next;
  }

  return dummy.next;
}

// Approach 2 -> Recursion
function swapPairs2(head) {
  if (!head || !head.next) return head;
  let left = head;
  let right = head.next;

  left.next = swapPairs(right.next);
  right.next = left;
  return right;
}

// Leetcode 19 -> Remove Nth node from end

// Approach 1
const removeNthFromEnd1 = function (head, n) {
  const sentinelNode = new ListNode();
  sentinelNode.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prevNode = length - n;

  let prev = sentinelNode;
  for (let i = 0; i < prevNode; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return sentinelNode.next;
};

// Approach 2
const removeNthFromEnd2 = function (head, n) {
  const sentinelNode = new ListNode();
  sentinelNode.next = head;

  let start = sentinelNode;
  let length = 0;
  let first = sentinelNode;
  while (first.next) {
    if (length >= n) {
      start = start.next;
    }
    first = first.next;
    length++;
  }
  start.next = start.next.next;

  return sentinelNode.next;
};

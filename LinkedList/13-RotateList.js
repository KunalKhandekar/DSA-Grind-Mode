// Leetcode 61 -> Rotate List

function rotateList(head, k) {
  if (!head || !head.next) return head;
  let oldHead = head;
  // find the length
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let newK = k % length;
  // No rotation
  if (newK === 0) return oldHead;

  // find the position of newK using slow & fast pointer
  let slow = oldHead;
  let fast = oldHead;
  let n = 0;
  while (fast.next) {
    if (n >= newK) {
      slow = slow.next;
    }
    fast = fast.next;
    n++;
  }

  let newHead = slow.next;
  slow.next = null;
  fast.next = oldHead;

  return newHead;
}

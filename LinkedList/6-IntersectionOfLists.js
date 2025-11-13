// Leetcode 160 -> Intersection of Two Linked List

// Approach 1 -> Infinity Values
function getIntersectionNode1(headA, headB) {
  let curr = headA;
  while (curr) {
    curr.value = Infinity;
    curr = curr.next;
  }
  curr = headB;
  while (curr) {
    if (curr.value === Infinity) {
      return curr;
    }
    curr = curr.next;
  }

  return null;
}

// Approach 2 -> Hash Map using SET
function getIntersectionNode2(headA, headB) {
  let hashTable = new Set();
  let curr = headA;
  while (curr) {
    hashTable.add(curr);
    curr = curr.next;
  }
  curr = headB;
  while (curr) {
    if (hashTable.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }

  return null;
}

// Approach 3 -> Bruteforce (Running the whole cirlce till intersection)



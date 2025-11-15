// Leetcode 2 -> Add Two Numbers
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function buildList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return dummy.next;
}

const addTwoNumbers = (l1, l2) => {
  let prevNode = new ListNode();
  let prevHead = prevNode;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = Math.floor(sum % 10);

    let currNode = new ListNode(digit);
    prevNode.next = currNode;
    prevNode = prevNode.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return prevHead.next;
};

function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}

let l1 = buildList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
let l2 = buildList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);
printList(result);
console.log(JSON.stringify(result));

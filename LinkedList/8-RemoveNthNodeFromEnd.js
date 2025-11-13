// Leetcode 18 -> Remove Nth node from end


const removeNthFromEnd = function (head, n) {
    const sentinelNode = new ListNode();
    sentinelNode.next = head;

    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }

    let prevNode = length - n;

    let prev = sentinelNode;
    for(let i = 0; i < prevNode; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;

    return sentinelNode.next;
};



// Leetcode 203. Remove Linked List Elements

function removeElements(head, val) {
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    let prev = sentinelNode;
    while(prev && prev.next) {
        if(prev.next.val === val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return sentinelNode.next;
}

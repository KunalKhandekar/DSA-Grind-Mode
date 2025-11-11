// Leetcode 141 -> Linked List Cycle

function hasCycle(head) {
    const setMap = new Set();
    let curr = head;
    while(curr) {
        if(setMap.has(curr)) {
            return true;
        }
        setMap.add(curr);
        curr = curr.next;
    }
    return false;
}
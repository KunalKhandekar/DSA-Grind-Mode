// Leetcode 876 -> Middle of Linked List

// Approach 1
function middleNode1(head) {
    let arr = [];
    let curr = head;
    while(curr){
        arr.push(curr);
        curr = curr.next;
    }

    return arr[Math.floor(arr.length/2)];
}


// Approach 2
function middleNode2() {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
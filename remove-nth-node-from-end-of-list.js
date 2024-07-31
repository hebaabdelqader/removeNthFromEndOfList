var removeNthFromEnd = function(head, n) {
    let newLinkedList = new ListNode(0);
    newLinkedList.next = head;

    
    let fastPointer = newLinkedList;
    let slowPointer = newLinkedList;

    for (let i = 1; i <= n + 1; i++) {
        fastPointer = fastPointer.next;
    }

    while (fastPointer != null) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
    }


    slowPointer.next = slowPointer.next.next;

    return newLinkedList.next;
};
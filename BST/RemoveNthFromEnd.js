var removeNthFromEnd = function(head, n) {
    if (n === 0) {
        return head
    }
    let tail = head
    let listLength = 1;
    while (tail.next) {
        tail = tail.next
        listLength += 1
    }
    if (listLength < n) {
        return
    }
    if (listLength === n) {
        if (n === 1) {
            return head.val = null
        }
        head = head.next
    }
    let nodeToRemove = head;
    let nodeToRemovePre = nodeToRemove
    while (nodeToRemove.next && listLength != n ) {
        nodeToRemovePre = nodeToRemove
        nodeToRemove = nodeToRemove.next
        listLength--
    }
    nodeToRemovePre.next = nodeToRemove.next
    return head
};

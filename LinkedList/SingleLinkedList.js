class Node{
  constructor(val){
    this.val = val
    this.next = null;
  }
}

class SinglyLinkedList{

  constructor(val){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Tail and Head has to be different
  push(n){
    const node = new Node(n)
    if (!this.head) {
      this.head = node
      this.length = 1
      return this
    }
    if (!this.tail) {
      this.tail = node
      this.head.next = this.tail
      this.length = 2
      return this
    }
    this.tail.next = node
    this.tail = this.tail.next
    this.length += 1
    return this
  }


}

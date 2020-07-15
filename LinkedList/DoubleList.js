class Node {
  constructor(num) {
    this.value = num
    this.next = null
    this.prev = null
  }
}
class DoubleList {
  constructor() {
    this.head = null
  }
  add(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
    }
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    node.prev = currentNode
    return this
  }
}
function convertArrToDoubleList(arr) {
  let doubleLinkedLish = new DoubleList()
  arr.forEach(n => {
    doubleLinkedLish.add(n)
  })
  console.log(doubleLinkedLish.head.next.next.prev.value)
  return doubleLinkedLish
}
convertArrToDoubleList([1,2,3,4,5])

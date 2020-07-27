class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority
  }
}


class MinBinaryHeap {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let node = new Node(val, priority)
    this.bubbleUp()
  }

  dequenue() {

  }
}
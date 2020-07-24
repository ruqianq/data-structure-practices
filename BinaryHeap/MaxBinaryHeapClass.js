class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(ele) {
    this.values.push(ele)
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx - 1)/2);
      if (this.values[childIdx] <= this.values[parentIdx]) break;
      this.swap(parentIdx, childIdx)
      childIdx = parentIdx;
    }
  }
  swap(idxToBeSwapped, idx){
    [this.values[idxToBeSwapped], this.values[idx]] = [this.values[idx], this.values[idxToBeSwapped]]
  }

  extractMax() {
    const max = this.values[0]
    if (this.values.length > 0) {
      this.values[0] = this.values.pop()
      this.sinkDown();
    }
    return max
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[leftChildIdx];
        if ((swap===null && rightChild > element) || (swap !== null && rightChild > leftChild)){
          swap = rightChildIdx
        }
      }
      if (swap === null) break;
      this.swap(swap, idx)
      idx = swap
    }
  }
}

heap = new MaxBinaryHeap()
heap.insert(7)
heap.insert(5)
heap.insert(3)
heap.insert(1)
heap.extractMax()
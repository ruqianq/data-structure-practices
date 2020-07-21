class MaxBinaryHeap2 {
  constructor() {
    this.values = [6, 5, 3, 4]
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
  swap(parentIdx, childIdx){
    return [this.values[parentIdx], this.values[childIdx]] = [this.values[childIdx], this.values[parentIdx]]
  }
}

heap = new MaxBinaryHeap2()
heap.insert(7)
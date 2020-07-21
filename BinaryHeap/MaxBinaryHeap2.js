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
  swap(idxToBeSwapped, idx){
    return [this.values[idxToBeSwapped], this.values[idx]] = [this.values[idx], this.values[idxToBeSwapped]]
  }
}

heap = new MaxBinaryHeap2()
heap.insert(7)
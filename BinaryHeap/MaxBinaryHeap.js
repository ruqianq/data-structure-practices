function insert(arr, num) {
  arr.push(num)
  return bubbleUp(arr, arr.length - 1)
}

function bubbleUp(arr, childIndex) {
  let parentIndex = Math.floor((childIndex - 1)/2)
  if (parentIndex < 0) {
    return arr
  }
  if (arr[childIndex] > arr[parentIndex]) {
    let swapedArr = swap(arr, parentIndex, childIndex)
    childIndex = parentIndex
    bubbleUp(swapedArr, childIndex)
  }
  return arr
}

function swap(arr, idxToSwapped, idx) {
  [arr[idxToSwapped], arr[idx]] = [arr[idx], arr[idxToSwapped]]
  return arr
}

function extractMax(arr) {
  let swappedArr = swap(arr, 0, arr.length - 1)
  swappedArr.pop()
  adjust(swappedArr, 0)
  return swappedArr
}

function adjust(arr, idx) {
  const element = arr[0]
  let leftIdx = idx * 2 + 1
  let rightIdx = idx * 2 + 2
  let idxToSwap, leftChild, rightChild
  if (leftIdx < arr.length) {
    leftChild = arr[leftIdx]
    if (leftChild > element) {
      idxToSwap = leftIdx
    }
  }
  if (rightIdx < arr.length) {
    rightChild = arr[rightIdx]
    if ((!idxToSwap && rightChild > element) || (idxToSwap && rightChild > leftChild)) {
      idxToSwap = rightIdx
    }
  }
  if (!idxToSwap) return;
  swap(arr, idx, idxToSwap)
  adjust(arr.slice(idxToSwap, 0))
}

insert([6, 4, 2], 1)

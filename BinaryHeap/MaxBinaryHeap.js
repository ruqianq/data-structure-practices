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

function swap(arr, parentIndex, childIndex) {
  [arr[parentIndex], arr[childIndex]] = [arr[childIndex], arr[parentIndex]]
  return arr
}

function extractMax(arr) {
  let swappedArr = swap(arr, 0, arr.length - 1)
  swappedArr.pop()
  adjust(swappedArr, 0)
  return swappedArr
}

function adjust(arr, idx) {

  let leftIdx = idx * 2 + 1
  let rightIdx = idx * 2 + 2

  while(idx < arr.length - 1) {
    if (arr[rightIdx] > arr[leftIdx]) {
      if (arr[idx] > arr[rightIdx]) break;
      arr = swap(arr, rightIdx, idx)
      idx = rightIdx
    } else {
      if (arr[idx] > arr[leftIdx]) break;
      arr = swap(arr, leftIdx, idx)
      idx = leftIdx
    }
  }
  return arr
}

insert([6, 4, 2], 1)
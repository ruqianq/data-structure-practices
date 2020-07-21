function extractMax(arr) {
  let swappedArr = swap(arr, 0, arr.length - 1)
  swappedArr.pop()
  adjust(swappedArr, 0)
  return swappedArr
}

function swap(arr, idxToBeSwapped, idx) {
  [arr[idxToBeSwapped], arr[idx]] = [arr[idx], arr[idxToBeSwapped]]
  return arr
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
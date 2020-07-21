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

insert([6, 4, 2], 1)
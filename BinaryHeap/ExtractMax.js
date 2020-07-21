function extractMax(arr) {
  let swappedArr = swap(arr, 0, arr.length - 1)
  const max = swappedArr.pop()
  return max
}

function swap(arr, idxToBeSwapped, idx) {
  return [arr[idxToBeSwapped], arr[idx]] = [arr[idx], arr[idxToBeSwapped]]
}



// Given a sorted array of integers, return the low and high index of the given key.
// You must return -1 if the indexes are not found.

let testArray = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];

function findHighLowInd(key, arr) {

  if (arr.length === 0) {
    return null
  }

  const minIdx = arr.indexOf(key)

  if (minIdx < 0) {
    return minIdx
  }

  let maxIdx = minIdx + 1

  while (arr[minIdx] === arr[maxIdx]) {
    maxIdx ++
  }

  return [minIdx, maxIdx - 1]
}

findHighLowInd(10, testArray)
// return -1
findHighLowInd(2, testArray)
// return [3, 7]

// function findHighLowInxBinarySearch(key, arr) {
//
//
//   return []
//
// }
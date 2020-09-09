// Find duplicates from sorted array

const testArray2 = [3, 3, 5, 6, 8, 8, 9, 10, 10];

function findDuplicateFromSort(arr) {
  let result = []

  if (arr.length === 0) {
    return result
  }

  let cur = 0
  let check = 1
  while (cur < arr.length - 1) {
    if (arr[cur] === arr[check]) {
      result.push(arr[cur])
    }
    cur = check
    check ++
  }
  return result
}

findDuplicateFromSort(testArray2)
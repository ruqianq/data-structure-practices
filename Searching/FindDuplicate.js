// Find duplicates from unsorted array

const testArray = [3, 3, 5, 6, 2, 8, 0, 4, 5, 1];

function findDuplicate(arr) {
  let result = []

  if (arr.length === 0) {
    return result
  }
  const lookup = arr.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1
    } else {
      acc[cur] += 1
    }
    return acc
  }, {})

  let keys = Object.keys(lookup)
  for (let k of keys) {
     if (lookup[k] > 1) {
       result.push(parseInt(k))
     }
  }

  return result
}

findDuplicate(testArray)

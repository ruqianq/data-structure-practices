function countUniqueValues(arr) {
    // Create two pointer as the index in arr
    let p = 0;
    let p2 = 1
    if (arr.length === 0) {
        return 0
    }
    // create a while loop that would loop through the arr
    while (arr[p] <= arr[p2] && p2 <= arr.length) {
    // when value as the the pointer refered matched, then return
        if (arr[p] !== arr[p2]) {
            p++
            arr[p] = arr[p2]
            p2++
        } else {
            p2++
        }
    }
    return p + 1
}


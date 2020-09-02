// To return two numbers in a sorted array has average of the given number

function averagePair(arr, num){
    if (arr.length === 0) {
        return false;
    }
    // create two pointers, one is pointing the first ind and 2nd one is pointing the next one
    let first = 0;
    let next = arr.length - 1;
    // create a while loop to check the pair
    while (first < next) {
        if (foundAverage(arr[first], arr[next], num)) return [arr[first], arr[next]];
        if (leftPointerMove(arr[first], arr[next], num)) first++;
        if (rightPointerMove(arr[first], arr[next], num)) next--;
    }
    return false;
}

function foundAverage(first, next, average) {
    return first + next === average * 2
}

function leftPointerMove(first, next, average) {
    return first + next < average * 2
}

function rightPointerMove(first, next, average) {
    return first + next > average * 2
}

averagePair([1,3,3,5,6,7,10,12,19], 8)

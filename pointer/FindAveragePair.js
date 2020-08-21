function averagePair(arr, num){
    if (arr.length === 0) {
        return false;
    }
    // create two pointers, one is pointing the first ind and 2nd one is pointing the next one
    let first = 0;
    let next = arr.length-1;
    // create a while loop to check the pair
    while (first < next) {
        if ((arr[first] + arr[next]) === num*2) {
            return true;
        } else if ((arr[first] + arr[next]) < num*2) {
            first++;
        } else {
            next--;
        }
    }
    return false;
}

averagePair([1,3,3,5,6,7,10,12,19], 8)

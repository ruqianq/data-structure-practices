function isSubsequence(str1, str2) {
    // create two array
    let strArr1 = str1.split("");
    let strArr2 = str2.split("");
    if (strArr1.length > strArr2.length) {
        return false
    }
    // create one pointer for each of the array (1st index)
    let p1 = 0;
    let p2 = 0;
    // create a while loop for check the char in each string array
    while (p2 < strArr2.length && p1 <= strArr1.length - 1 ) {
        if (strArr1[p1] == strArr2[p2]) {
            p1++
            if (p1 === strArr1.length - 1){
            return true
            }
        } 
          p2++
    }
    return false
}
isSubsequence("sing", "hello sing")

// You have n boxes. You are given a binary string boxes of length n,
// where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
// In one operation, you can move one ball from a box to an adjacent box.
// Box i is adjacent to box j if abs(i - j) == 1.
// Note that after doing so, there may be more than one ball in some boxes.
// Return an array answer of size n, where answer[i] is the minimum number of operations
// needed to move all the balls to the ith box.
// Each answer[i] is calculated considering the initial state of the boxes.
//
// Constraints:
// n == boxes.length
// 1 <= n <= 2000
// boxes[i] is either '0' or '1'.

// Question: if one box, return 0? yes
export function oneBoxWillReturnZero() {
    return [0]
}

export function convertStringToArray(boxes) {
    return boxes.split('')
}

export function noBallInAnyBoxes(boxesArray) {
    return Array(boxesArray.length).fill(0)
}

export function isLengthOfArrayEven(lengthOfArray) {
    if (lengthOfArray % 2 == 0) {
        return true
    }
}

export function jumpCalculatorByIdx(lengthOfArray, i: number, boxesArray) {
    return ((lengthOfArray - i) * ((lengthOfArray - i) + 1) / 2) * boxesArray[i];
}

/**
 * @param {string} boxes
 * @return {number[]}
 */
export function minOperations(boxes) {
    let counters = []
    const boxesArray = convertStringToArray(boxes)
    const lengthOfArray = boxesArray.length
    if (lengthOfArray == 1) {
        return oneBoxWillReturnZero()
    }
    if (boxesArray.indexOf('1') == -1) {
        return noBallInAnyBoxes(boxesArray)
    }
    let i = 0
    if (isLengthOfArrayEven(lengthOfArray)) {
        return []
    }
    while (i <= Math.round(lengthOfArray)) {
        counters.push(jumpCalculatorByIdx(lengthOfArray, i, boxesArray))
        i ++
    }


    return counters
}
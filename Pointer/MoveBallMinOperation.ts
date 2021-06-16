export function oneBoxWillReturnZero() {
    return [0]
}

export function convertStringToArray(boxes) {
    return boxes.split('').map(i => parseInt(i))
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
    return ((i) * (i + 1)/2 + (lengthOfArray - i) * (lengthOfArray - i - 1)/2) *  boxesArray[i]
}

export function oddArrayParser(i: number, lengthOfArray, counters: any[], boxesArray) {
    while (i < lengthOfArray) {
        if (i <= Math.floor(lengthOfArray/2)) {
            counters.push(jumpCalculatorByIdx(lengthOfArray, i, boxesArray))
        }
        else {
            counters.push(counters[lengthOfArray - i - 1])
        }
        i++
    }
    return counters
}

export function evenArrayParser(i: number, lengthOfArray, counters: any[], boxesArray) {
    while (i < lengthOfArray) {
        if (i <= lengthOfArray/2 - 1) {
            counters.push(jumpCalculatorByIdx(lengthOfArray, i, boxesArray))
        }
        else {
            counters.push(counters[lengthOfArray - i - 1])
        }
        i++
    }
    return counters
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
    if (boxesArray.indexOf(1) == -1) {
        return noBallInAnyBoxes(boxesArray)
    }
    let i = 0
    if (isLengthOfArrayEven(lengthOfArray)) {
        return evenArrayParser(0, lengthOfArray, counters, boxesArray)
    }

    return oddArrayParser(0, lengthOfArray, counters, boxesArray)
}
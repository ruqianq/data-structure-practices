import {convertStringToArray, minOperations, oneBoxWillReturnZero, noBallInAnyBoxes,
    isLengthOfArrayEven, jumpCalculatorByIdx} from "../Pointer/MoveBallMinOperation";

test('Test One box will return 0', () => {
    expect(oneBoxWillReturnZero()).toEqual([0]);
});

test('Test utl function that convert string into array', () => {
    expect(convertStringToArray('101')).toEqual(['1', '0', '1']);
});

test('Test one box the minOperation is 0', () => {
    expect(minOperations('1')).toEqual([0]);
});

test('Test if there are not one box return counter array', () => {
    expect(minOperations('1')).toEqual([0]);
});

test('Test if there is no ball in any boxes', () => {
    expect(noBallInAnyBoxes(['0', '0', '0'])).toEqual([0, 0, 0])
})

test('Test check the length is odd or even', () => {
    expect(isLengthOfArrayEven(2)).toEqual(true)
})

test('Test check the length is odd or even', () => {
    expect(jumpCalculatorByIdx(2, 1, [1, 1])).toEqual(1)
})

test('Test get the operation of all box has ball length equal var', () => {
    expect(minOperations('2').length).toEqual(2)
})

test('Test get the operation of all box has ball', () => {
    expect(minOperations(3)).toEqual([3, 2, 3])
})


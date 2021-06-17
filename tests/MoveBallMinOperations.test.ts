import {
    minOperations, oneBoxWillReturnZero, noBallInAnyBoxes,
    isLengthOfArrayEven, jumpCalculatorByIdx, oddArrayParser, evenArrayParser
} from "../Pointer/MoveBallMinOperation";

test('Test One box will return 0', () => {
    expect(oneBoxWillReturnZero()).toEqual([0]);
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

test('Test the calculator', () => {
    expect(jumpCalculatorByIdx(5, 2, [1, 1, 1, 1, 1])).toEqual(6)
})

test('Test odd array creator', () => {
    expect(oddArrayParser(0, 3, [], [1, 1, 1])).toEqual([3, 2, 3])
})

test('Test even array creator', () => {
    expect(evenArrayParser(0, 4, [], [1, 1, 1])).toEqual([6, 4, 4, 6])
})

test('Test get the operation of all box has ball', () => {
    expect(minOperations('111')).toEqual([3, 2, 3])
})


import {convertStringToArray, minOperations, oneBoxWillReturnZero, noBallInAnyBoxes, getOperationWhenAllBoxHasBall} from "../Pointer/MoveBallMinOperation";

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

test('Test if there is no ball in any boxes', () => {
    expect(getOperationWhenAllBoxHasBall(2)).toEqual([1, 1])
})


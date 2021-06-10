import {convertStringToArray, minOperations, oneBoxWillReturnZero} from "../Pointer/MoveBallMinOperation";

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

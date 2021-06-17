import {convertNumberStringToArrayOfInt} from "../Util/Util";

test('Test utl function that convert string into array', () => {
    expect(convertNumberStringToArrayOfInt('101')).toEqual([1, 0, 1]);
});
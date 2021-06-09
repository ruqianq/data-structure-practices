// const CountPointsInsideCircle = require('../Searching/CountPointsInsideCircle');
import {pointToCenter, countPoints, pointIsInsideCircle} from "../Searching/CountPointsInsideCircle";

test('Test circle boundary calculator', () => {
    expect(pointToCenter([1, 1], [1, 2, 2]))
        .toEqual(1);
});

test('Test the point out of boundary', () => {
    expect(pointIsInsideCircle([3,3], [1,2,2]))
        .toBe(false);
});

test('Test the point inside the circle', () => {
    expect(countPoints([[1,1],[2,2],[3,3],[4,4],[5,5]],
        [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]))
        .toEqual([2,3,2,4]);
});
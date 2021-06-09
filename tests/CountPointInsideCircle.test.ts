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

test('Test the point right at the boundary', () => {
    expect(pointIsInsideCircle([1,3], [2,3,1]))
        .toBe(true);
});

test('Test the point inside the circle', () => {
    expect(countPoints([[1,3],[3,3],[5,3],[2,2]],
        [[2,3,1],[4,3,1],[1,1,2]]))
        .toEqual([3,2,2]);
});
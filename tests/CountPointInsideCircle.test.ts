import {pointToCenter, countPoints, isPointInside, isPointInsideCircleCounter} from "../Pointer/CountPointsInsideCircle";

test('Test point to center of circle distance', () => {
    expect(pointToCenter([1, 1], [1, 2, 2])).toEqual(1);
});

test('Test the point out of circle should return False', () => {
    expect(isPointInside([3,3], [1,2,2])).toBe(false);
});

test('Test the point at the boundary of circle should return True', () => {
    expect(isPointInside([1,3], [2,3,1])).toBe(true);
});

test('Test if the point inside the circle then count 1', () => {
    expect(isPointInsideCircleCounter([1,3], [2,3,1], 0)).toBe(1);
});

test('Test the multiple points weather it is inside the circles', () => {
    expect(countPoints([[1,3],[3,3],[5,3],[2,2]],
        [[2,3,1],[4,3,1],[1,1,2]])).toEqual([3,2,2]);
});
const CountPointsInsideCircle = require('../Searching/CountPointsInsideCircle');

test('Test circle boundary calculator', () => {
    expect(CountPointsInsideCircle.circleBoundaryCalculator([1, 2, 3]))
        .toEqual([-2, 4, 5, -1]);
});

test('Test the point out of boundary', () => {
    expect(CountPointsInsideCircle.pointIsInsideCircle([7, 8], [1, 2, 3]))
        .toBe(false);
});

test('Test the point inside the ciclr', () => {
    expect(CountPointsInsideCircle.countPoints([[1,1],[2,2],[3,3],[4,4],[5,5]],
        [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]))
        .toEqual([2,3,2,4]);
});
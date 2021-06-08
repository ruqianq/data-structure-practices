const CountPointsInsideCircle = require('../Searching/CountPointsInsideCircle');

test('Test circle boundary calculator', () => {
    expect(CountPointsInsideCircle.circleBoundaryCalculator([1, 2, 3]))
        .toEqual([-2, 4, 5, -1]);
});

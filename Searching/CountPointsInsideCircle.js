// You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane.
// Multiple points can have the same coordinates.
// You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a
// radius of rj.
//
// For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle
// are considered inside.
//
// Return an array answer, where answer[j] is the answer to the jth query.

// Constraints:
//
//     1 <= points.length <= 500
//     points[i].length == 2
//     0 <= xi, yi <= 500
//     1 <= queries.length <= 500
//     queries[j].length == 3
//     0 <= xj, yj <= 500
//     1 <= rj <= 500
//     All coordinates are integers.

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = function(points, queries) {
    return []
};

const circleBoundaryCalculator = function (query) {
    const xLeftmostPoint = query[0] - query[2]
    const xRightmostPoint = query[0] + query[2]
    const yTopPoint = query[1] + query[2]
    const yLowPoint = query[1] - query[2]
    return [xLeftmostPoint, xRightmostPoint, yTopPoint, yLowPoint]
}

module.exports.countPoints = countPoints;
module.exports.circleBoundaryCalculator = circleBoundaryCalculator;

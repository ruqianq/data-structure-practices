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

export function circleBoundaryCalculator(query) {
    const xLeftmostPoint = query[0] - query[2]
    const xRightmostPoint = query[0] + query[2]
    const yTopPoint = query[1] + query[2]
    const yLowPoint = query[1] - query[2]
    return [xLeftmostPoint, xRightmostPoint, yTopPoint, yLowPoint]
}

export function pointIsInsideCircle(point, query) {
    const boundaries = circleBoundaryCalculator(query)
    return !(point[0] > boundaries[1]
        || point[0] < boundaries[0]
        || point[1] > boundaries[2]
        || point[1] < boundaries[3]);
}

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
export function countPoints(points, queries) {
    let numberOfCircleCounts = []
    let queryIndex = 0
    while (queryIndex < queries.length) {
        let pointIndex = 0
        let counter = 0
        while (pointIndex < points.length) {
            if (pointIsInsideCircle(points[pointIndex], queries[queryIndex])) {
                counter++
            }
            pointIndex++
        }
        numberOfCircleCounts.push(counter)
        queryIndex++
    }
    return numberOfCircleCounts
}


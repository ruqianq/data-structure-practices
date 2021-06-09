

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

export const pointToCenter = function (point, query) {
    return Math.sqrt(Math.pow(query[0] - point[0], 2) + Math.pow(query[1] - point[1], 2))
}

export const isPointInside = function (point, query) {
    const dist = pointToCenter(point, query)
    return dist <= query[2]
}

export function isPointInsideCircleCounter(point: number[], query:number[], numberOfPointsInside: number) {
    if (isPointInside(point, query)) {
        numberOfPointsInside++
    }
    return numberOfPointsInside;
}


/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
export const countPoints = function(points, queries) {
    let listOfNumberPointsInside = []
    let queryIndex = 0

    while (queryIndex < queries.length) {
        let pointIndex = 0
        let numberOfPointsInside = 0

        while (pointIndex < points.length) {
            numberOfPointsInside = isPointInsideCircleCounter(points[pointIndex], queries[queryIndex], numberOfPointsInside);
            pointIndex ++
        }

        listOfNumberPointsInside.push(numberOfPointsInside)
        queryIndex ++
    }
    return listOfNumberPointsInside
};


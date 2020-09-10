let point = [[3, 3], [5, -1], [-2, 4]]

function findClosestPoint(arr, K) {
  let distanceObject = {}

  for (let p of arr) {
    distanceObject[p] = eudDistance(p[0], p[1])
  }

  let distance = Object.keys(distanceObject).sort((a, b) => parseInt(a) - parseInt(b))
  console.log(distance)
  let result = []

  for (let k = 0; k < K; k++) {
    result.push(distanceObject[distance[k]])
  }

  return result
}

function eudDistance(p1, p2) {
  return (p1)**2 + (p2)**2
}
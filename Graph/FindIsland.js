// Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island.
// For example, the below matrix contains 5 islands

const met = [[1, 1, 0, 0, 0],
             [0, 1, 0, 0, 1],
             [1, 0, 0, 1, 1],
             [0, 0, 0, 0, 0],
             [1, 0, 1, 0, 1]]

class Island {
  constructor(row, col, graph) {
    this.row = row;
    this.col = col;
    this.graph = graph;
  }

  isSubGraph(r, c, visited) {
    return r >= 0 && r < this.row && c >= 0 && c < this.col && !visited[r][c] && this.graph[r][c]
  }

  dfs(r, c, visited) {
    const rNeighbor = [-1, 0, 0, 1];
    const cNeighbor = [0, -1, 1, 0];

    visited[r][c] = true;

    for ( let i = 0; i <= 4; i++ ) {
      if (this.isSubGraph(r + rNeighbor[i], c + cNeighbor[i], visited)) {
        this.dfs(r + rNeighbor[i], c + cNeighbor[i], visited)
      }
    }
  }
  count() {
    let rowArr = new Array(this.row)
    let colArr = new Array(this.col).fill(false)
    let visitedArr = rowArr.fill(colArr);
    let result = 0;
    for ( let i = 0; i <= this.row; i++ ) {
      for (let j = 0; j <= this.col; j++ ) {
        if (visitedArr[i][j] === false && this.graph[i][j] === 1) {
          this.dfs(i, j, visitedArr)
          result += 1
        }
      }
    }
    return result
  }
}

const island = new Island(met.length, met[0].length, met)

island.count()
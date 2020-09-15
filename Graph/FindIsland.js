// Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island.
// For example, the below matrix contains 5 islands

let met = [[1, 1, 0, 0, 0],
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

  dfs(r, c) {
    // Condition to verify the node
    if (r < 0 || c < 0 || r >= this.row || c >= this.col || this.graph[r][c] !== 1) {
      return
    }
    // Alternative, we could make a hashmap to record the vistied node
    this.graph[r][c] = "#"
    // Find the neighbor nodes
    this.dfs(r + 1, c)
    this.dfs(r - 1, c)
    this.dfs(r, c + 1)
    this.dfs(r, c - 1)
  }
    // a nested loop to check through the nodes
  count() {
    // counter
    let result = 0;
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.row; j++) {
        if (this.graph[i][j] === 1) {
          this.dfs(i, j)
          result += 1
        }
      }
    }
    return result
  }
}

const island = new Island(met.length, met[0].length, met)

island.count()

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

  dfs(r, c, visited) {
    if (r < 0 || c < 0 || r >= this.row || c >= this.col || this.graph[r][c] != 1) {
      return null
    }

    this.graph[c][r] = "#"
    this.dfs(r + 1, c, this.graph)
    this.dfs(r - 1, c, this.graph)
    this.dfs(r, c + 1, this.graph)
    this.dfs(r, c - 1, this.graph)
  }

}

const island = new Island(met.length, met[0].length, met)

island.count()
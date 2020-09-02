// Build an undirected graph
// TODO: add error handler

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) =>
      v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) =>
      v !== vertex1
    )
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex]
  }

  dfsRecurse(vertex) {

    const result = []
    const visited = {}
    const helper = (vertexInput) => {
      if (this.adjacencyList[vertexInput].length === 0) {
        return
      }
      visited[vertexInput] = true
      result.push(vertexInput)
      for (let v of this.adjacencyList[vertexInput]) {
        if (!visited[v]) {
          helper(v)
        }
      }
    }
    helper(vertex)
    return result
  }
}

g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

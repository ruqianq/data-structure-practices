// Given the root node of a directed graph, clone this graph by creating its deep copy so that the cloned graph has
// the same vertices and edges as the original graph.

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
    this.adjacencyList[vertex2].push(vertex2)
  }

  copy(root) {
    let newGraph = new Graph()
  }
}




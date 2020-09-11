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
    if (!root) {
      return null
    }
    let newGraph = new Graph()
    let visited = {}
    const helper = (vertexInput) => {
      if (!vertexInput) {
        return null
      }
      visited[vertexInput] = true
      newGraph.addVertex(vertexInput)
      for (let v of this.adjacencyList[vertexInput]) {
        newGraph.addEdge(vertexInput, v)
        if (!visited[v]){
          newGraph.addVertex(v)
          newGraph.addEdge(vertexInput, v)
          helper(v)
        }
      }
    }
    helper(root)
    return newGraph
  }
}

function buildUndirectGraph() {
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
  return g
}

g = buildUndirectGraph()
newG = g.copy()







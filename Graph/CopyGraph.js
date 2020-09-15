// Given the root node of a undirected graph, clone this graph by creating its deep copy so that the cloned graph has
// the same vertices and edges as the original graph.
// Question from leetcode

// Defind a node
// Alternative could use class

class NodeClass {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors
    }
}

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

const cloneGraph = (node) => {
  let visited = {}

  let bfsHelper = (node) => {
    if (!node) {
      return null
    }

    let root = new Node(node.val)
    visited[node.val] = root
    for (let n of node.neighbors){
      if (!visited[n.val]) {
        root.neighbors.push(n)
        bfsHelper(n)
      } else {
        return visited[n.val]
      }
    }
    return root
  }
  return bfsHelper(node)
}

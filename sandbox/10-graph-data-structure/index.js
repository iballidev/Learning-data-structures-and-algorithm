/**A graph is a fundamental data structure in computer science that represents a collection of nodes (or vertices) connected by edges. It's used to model relationships between different entities or elements. In JavaScript, you can implement a graph using different approaches, such as using an adjacency matrix or an adjacency list. The choice of representation depends on the specific use case and the operations you need to perform efficiently.

Here's a basic implementation of a graph using an adjacency list in JavaScript: */

class Graph {
  constructor() {
    this.adjacencyList = new Map(); // Using a Map to store the adjacency list
  }

  addNode(node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(node_edge_1, node_edge_2) {
    if (this.adjacencyList.has(node_edge_1) && this.adjacencyList.has(node_edge_2)) {
      this.adjacencyList.get(node_edge_1).push(node_edge_2);
      this.adjacencyList.get(node_edge_2).push(node_edge_1); // For an undirected graph
    }
  }

  getNeighbors(node) {
    if (this.adjacencyList.has(node)) {
      return this.adjacencyList.get(node);
    } else {
      return [];
    }
  }

  // You can add more methods like removing nodes/edges, checking connectivity, etc.
}

// Example usage
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "D");

console.log("A neighbors: ", graph.getNeighbors("A")); // Output: ['B']
console.log("B neighbors: ", graph.getNeighbors("B")); // Output: ['A', 'C']
console.log(graph); // Output: ['A', 'C']

/**In this example, the Graph class uses an adjacency list to represent the connections between nodes. 
 * The addNode method adds a node to the graph, the addEdge method adds an edge between two nodes, and 
 * the getNeighbors method returns an array of neighbors for a given node.

Remember that this is a simple example. Depending on your requirements, you might need to add more methods 
to handle various operations on the graph, such as removing nodes/edges, checking connectivity, finding paths, and more. */

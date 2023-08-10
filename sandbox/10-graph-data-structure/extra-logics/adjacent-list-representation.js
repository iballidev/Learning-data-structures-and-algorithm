/**Adjacency List Representation:
An adjacency list is a common way to represent a graph in JavaScript. It involves using an object or a Map where each vertex (node) of the graph is a key, and the corresponding value is an array containing the neighbors of that vertex. */

const graph = new Map();

graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D"]);
graph.set("C", ["A", "D"]);
graph.set("D", ["B", "C"]);

console.log("graph: ", graph);

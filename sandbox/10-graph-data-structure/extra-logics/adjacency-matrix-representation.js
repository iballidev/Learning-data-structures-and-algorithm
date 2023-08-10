/**Adjacency Matrix Representation:
An adjacency matrix is another approach to represent graphs using a 2D array. The value at matrix[i][j] represents whether there is an edge between vertex i and vertex j. */

const vertices = 4;
const matrix = Array.from(Array(vertices), () => Array(vertices).fill(0));

matrix[0][1] = 1; // Edge from vertex 0 to vertex 1
matrix[1][0] = 1; // Graph is undirected, so edge from vertex 1 to vertex 0
matrix[0][2] = 1;
matrix[2][0] = 1;
// ...and so on

console.log("matrix: ", matrix);

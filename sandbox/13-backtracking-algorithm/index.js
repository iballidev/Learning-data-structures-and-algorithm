/**Backtracking is a powerful algorithmic technique used to solve combinatorial problems, where you systematically
 try out different possibilities and backtrack (undo) when you reach a dead-end or find an invalid solution. 
 It's commonly used in various fields such as optimization, puzzles, and graph problems. JavaScript can be used 
 to implement backtracking algorithms effectively. Let's look at a general approach for implementing a backtracking
 algorithm and then explore a classic example: the N-Queens problem. */

/**General Backtracking Algorithm:

a. Choose: Choose the next possibility that seems promising, based on the problem's constraints and the current state.
b. Explore: Try the chosen possibility and move to the next state.
c. Constraint Check: Check if the current state violates any constraints of the problem. If it does, backtrack.
d. Solution Check: If the current state is a solution to the problem, record it if necessary.
e. Backtrack: If the current state does not lead to a solution or violates constraints, undo the last move and try a 
different possibility. */

/**
 * Example: N-Queens Problem

The N-Queens problem involves placing N queens on an N×N chessboard in such a way that no two queens threaten each 
other. This means that no two queens can be in the same row, column, or diagonal. Here's a JavaScript implementation 
using backtracking: */

function solveNQueens(n) {
  const result = [];

  function backtrack(board, row) {
    if (row === n) {
      result.push(board.slice());
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(board, row, col)) {
        board[row][col] = "Q";
        backtrack(board, row + 1);
        board[row][col] = ".";
      }
    }
  }

  function isValid(board, row, col) {
    // Check the column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
    }
    // Check the upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }
    // Check the upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }
    return true;
  }

  const emptyBoard = Array.from({ length: n }, () => Array(n).fill("."));
  backtrack(emptyBoard, 0);
  return result;
}

// Example usage:
const n = 4;
const solutions = solveNQueens(n);
console.log(solutions);

/**This code demonstrates a backtracking approach to solve the N-Queens problem. It defines a solveNQueens function 
 * that takes an integer n representing the size of the chessboard and returns an array of valid solutions.

In the backtracking function (backtrack), we iterate through each column in the current row and try placing a queen 
in that column. We check if the placement is valid by verifying that no other queens threaten the current position. 
If the placement is valid, we move to the next row and continue the search. If we reach a valid solution (when row === n),
we record the solution. If the placement is not valid or leads to a dead-end, we backtrack by undoing the last move (backtracking step).

The isValid function checks if a given position on the board is a valid placement for a queen, considering the column and 
both diagonals.

This code will find all distinct solutions to the N-Queens problem for the given value of n. The solutions are represented
as arrays of strings, where each string represents a row of the chessboard, and 'Q' indicates the position of a queen.

Note: The code above finds all solutions. If you only need to find one solution, you can modify the code to stop after finding
the first valid solution.

This example demonstrates the general backtracking approach used to solve the N-Queens problem. You can adapt this approach to
solve other combinatorial problems that involve exploring possible configurations and checking constraints. */

/**Dynamic programming is a powerful technique in computer science and algorithms, often used to optimize problems 
 by breaking them down into smaller subproblems and reusing solutions to those subproblems. It is particularly useful
 for solving problems that exhibit overlapping substructure and optimal substructure. JavaScript is a versatile 
 language that can be used for dynamic programming.

Let's take an example of a classic dynamic programming problem: the Fibonacci sequence. We'll show how dynamic 
programming can be used to optimize its computation.
*/

/**
Problem: Compute the nth Fibonacci number.

The naive recursive approach to compute the Fibonacci numbers is inefficient because it repeatedly calculates the 
same values multiple times, leading to an exponential time complexity.
*/

/**
Dynamic Programming Approach (Memoization):

We can use memoization to store the results of previously calculated Fibonacci numbers and reuse them to compute 
new Fibonacci numbers. Here's a JavaScript implementation using dynamic programming: */
function fibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55

/**In this implementation, we use the memo object to store the results of previously computed Fibonacci numbers. 
When we need to compute a Fibonacci number, we first check if it's already in the memo. If it is, we return the 
stored value; otherwise, we compute the value recursively and store it in the memo before returning it.

This approach significantly reduces the number of duplicate computations, leading to a much more efficient algorithm. 
It has a time complexity of O(n) since each Fibonacci number is computed only once.

Remember that dynamic programming can be applied to a wide range of problems beyond Fibonacci, and the approach may vary based on the specific problem you're trying to solve. The key idea is to break down the problem into smaller subproblems, solve them, and combine their solutions to get the final result, while avoiding duplicate computations through memoization or other techniques. */

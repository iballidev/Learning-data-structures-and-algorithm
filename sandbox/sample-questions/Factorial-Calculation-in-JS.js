/**Sure, here's a simple JavaScript algorithm example that calculates the factorial of a given positive integer using 
both iterative and recursive approaches: */

// Iterative approach
function factorialIterative(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive approach
function factorialRecursive(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Testing the functions
console.log(factorialIterative(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorialRecursive(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

/**In this example, we have two functions, factorialIterative and factorialRecursive, that both compute the factorial 
of a non-negative integer n. The iterative approach uses a simple loop to multiply the numbers from 1 to n, while the 
recursive approach defines the factorial in terms of the factorial of (n - 1).

Remember to handle the case of negative numbers, as the factorial is not defined for them. The code includes a check 
to handle this case and returns an appropriate message. */

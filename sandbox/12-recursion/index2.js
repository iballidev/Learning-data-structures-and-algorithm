/**Recursion is a programming technique in which a function calls itself in order to solve a problem. In JavaScript, 
 * like in many programming languages, recursion can be a powerful and elegant way to solve certain types of problems. 
 * However, it's important to use recursion wisely and make sure that the base case is properly defined to avoid infinite loops.

Here's a basic example of a recursive function in JavaScript: */

function countdown(n) {
  // Base case: Stop when n reaches 0
  if (n <= 0) {
    console.log("Blastoff!");
  } else {
    console.log(n);
    countdown(n - 1); // Recursive call
  }
}

countdown(5);

/**In this example, the countdown function prints numbers from n down to 1, and then prints "Blastoff!" when n reaches 0.
 * The function calls itself with the argument n - 1 until the base case is reached. */

/**Here's another classic example: calculating the factorial of a number using recursion: */

function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1); // Recursive call
  }
}

console.log(factorial(5)); // Outputs 120 (5! = 5 * 4 * 3 * 2 * 1)

/**Keep in mind that while recursion can be elegant, it might not always be the most efficient solution, as it
  can lead to a large number of function calls and consume more memory. In some cases, iterative solutions 
  might be more suitable.

When using recursion, make sure to define a clear base case (the condition under which the function stops calling
itself) and ensure that the function progresses towards that base case with each recursive call. Also, be 
cautious about potential stack overflow errors if the recursion goes too deep without proper termination. */

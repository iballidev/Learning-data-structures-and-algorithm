/**Greedy methodology, also known as a greedy algorithm, is a problem-solving strategy used in computer science and mathematics.
 It involves making locally optimal choices at each step with the hope of finding a global optimum solution. In the context of JavaScript, 
 greedy algorithms can be used to solve a variety of problems efficiently. Here's a general outline of how the greedy methodology works 
 and some examples in JavaScript: */

/**How Greedy Methodology Works:

Problem Selection: Identify problems where making the best immediate choice at each step leads to an optimal solution overall.

Greedy Choice: At each step, make the choice that seems best at that moment. This choice should be based on some criterion that 
makes the overall solution as optimal as possible.

Optimal Substructure: The problem must have a property that the optimal solution to the entire problem contains the optimal 
solutions to its smaller subproblems. */

/**Examples of Greedy Algorithms in JavaScript:*/

/**
 * 1. Coin Change Problem:
 * 

Problem: Given a set of coin denominations and a target amount, find the minimum number of coins needed to make up that amount.
Greedy Choice: Always pick the largest coin denomination that is less than or equal to the remaining amount.

JavaScript Code: */

/**
 * 2. Activity Selection Problem:

Problem: Given a list of activities with their start and end times, select the maximum number of non-overlapping activities.
Greedy Choice: Always pick the activity that ends earliest and is compatible with the previously selected activity.

JavaScript Code: */

/**
 * 3. Fractional Knapsack Problem:

Problem: Given a set of items with weights and values, and a maximum weight capacity, determine the maximum value that can be obtained by filling the knapsack.
Greedy Choice: Select items with the highest value-to-weight ratio first.

JavaScript Code: */

/**Remember that while greedy algorithms are powerful and can solve certain types of problems optimally, 
 they may not always guarantee the globally optimal solution for all problems. It's important to carefully 
 analyze the problem and ensure that the greedy choice property holds. */

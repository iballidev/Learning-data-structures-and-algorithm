/**Sure, let's work on a simple JavaScript algorithm example together. How about we create a function that finds 
the largest number in an array of numbers? Here's the problem statement and a solution for it: */

/**Problem: Find the largest number in an array of numbers. */

/**Solution: */
function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return null; // Return null for an empty array
  }

  let largest = numbers[0]; // Assume the first number is the largest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; // Update largest if a larger number is found
    }
  }

  return largest;
}

// Example usage
const numberArray = [10, 5, 25, 8, 15];
const largestNumber = findLargestNumber(numberArray);
console.log("The largest number is:", largestNumber); // Output: The largest number is: 25




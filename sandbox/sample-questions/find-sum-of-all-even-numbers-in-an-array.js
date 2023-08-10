/**my solution */
function finSumOfEvenNumbers(arr) {
  let newArray = [];
  let EvenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i]);
      EvenSum += arr[i];
    }
  }
  return EvenSum;
}

let x = finSumOfEvenNumbers([2, 3, 5, 10, 7, 8, 12]);
console.log("x: ", x);

/**ChatGpt */

/**Sure, here's a simple JavaScript algorithm problem and its solution. Let's solve the problem of finding the sum of all even numbers 
in a given array. */

/**Problem: Write a JavaScript function that takes an array of numbers as input and returns the sum of all even numbers in the array. */

/**Solution: */
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumEvenNumbers(numbers);
console.log("Sum of even numbers:", result); // Output: Sum of even numbers: 30 (2 + 4 + 6 + 8 + 10)

/**In this solution, we define a function sumEvenNumbers that takes an array arr as input. We initialize a variable sum to 
keep track of the sum of even numbers. We then iterate through each element of the input array, and if the current element 
is an even number (i.e., its remainder when divided by 2 is 0), we add it to the sum variable. Finally, we return the total 
sum of even numbers.

The example usage demonstrates how to call the function with an array of numbers and get the sum of even numbers from that array. */

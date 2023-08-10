/**JavaScript arrays are one of the fundamental data structures in the language, used to store collections of elements.
 * They can contain any type of data, such as numbers, strings, objects, functions, and even other arrays. Arrays in
 * JavaScript are dynamic, which means they can grow or shrink in size as needed. Here are some important aspects of
 * JavaScript arrays: */

/**1. Declaration and Initialization:
You can create an array in JavaScript using either the array literal syntax ([]) or the Array constructor. */
// Using array literal
const myArray = [1, 2, 3, 4, 5];
// Using Array constructor
const anotherArray = new Array("apple", "banana", "cherry");

/**2. Accessing Elements:
Elements in an array are accessed by their index, starting from 0 for the first element. */
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: "apple"

/**3. Array Methods:
JavaScript provides a wide range of built-in methods for manipulating arrays, such as push, pop, shift, unshift, 
slice, splice, concat, join, indexOf, includes, forEach, map, filter, reduce, and many more. */
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Adds 6 to the end
numbers.pop(); // Removes the last element
numbers.map((num) => num * 2); // Returns a new array with each element doubled

/**4. Array Length:
The length property of an array indicates the number of elements it contains. */
const colors = ["red", "green", "blue"];
console.log(colors.length); // Output: 3

/**5. Array Iteration:
You can iterate over the elements of an array using various techniques, such as for loops, for...of loops, 
forEach method, etc. */
const _fruits = ["apple", "banana", "cherry"];
for (const fruit of _fruits) {
  console.log(fruit);
}
// Output:
// "apple"
// "banana"
// "cherry"

/**JavaScript arrays provide a flexible way to work with collections of data, and their versatile methods 
 make them powerful for a wide range of programming tasks. */

/**JavaScript offers several built-in sorting algorithms through the Array.prototype.sort() method. 
By default, this method sorts elements in lexicographic (alphabetical) order when no sorting function is provided. 
However, you can use a custom sorting function to sort elements in other orders, such as numerical or custom object-based sorting.

Here's an overview of the basic sorting algorithm provided by Array.prototype.sort():
*/

/**1. Lexicographic (Default) Sorting: 
This is the default sorting behaviour of the sort() method, where elements are sorted in lexicographic order (i.e., string-based sorting). For example:
*/
const fruits_LexicographicSorting = ['banana', 'apple', 'orange', 'grape'];
const result = fruits_LexicographicSorting.sort();
console.log(result); // ['apple', 'banana', 'grape', 'orange']

/**2. Numerical Sorting:
To sort an array of numbers numerically, you need to provide a sorting function that compares two elements and returns a value based on their numeric relationship:
*/
const numbers = [10, 2, 30, 5, 8];
const result2  = numbers.sort((a, b) => a - b);
console.log(result2);  // [2, 5, 8, 10, 30]

/**3. Reverse Sorting:
To sort an array in reverse order, you can use the following:
*/
const fruits_resversSorting = ['banana', 'apple', 'orange', 'grape'];
const result3  = fruits_resversSorting.sort((a, b) => b.localeCompare(a));
console.log(result3); // ['orange', 'grape', 'banana', 'apple']

/**4. Custom Object Sorting:
For sorting arrays of custom objects, you need to provide a comparison function to define the sorting criteria:
*/
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

const result4  = people.sort((a, b) => a.age - b.age);
console.log(result4);  // Sorted by age in ascending order
// It's important to note that the sort() method modifies the original array in place and returns the sorted array. Additionally, the default sorting algorithm may not always be the most efficient for all scenarios. In some cases, you might need to implement more specialized sorting algorithms, such as Merge Sort, Quick Sort, or Heap Sort, for improved performance on large datasets.





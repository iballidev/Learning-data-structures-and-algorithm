/**Quick Sort is another widely used sorting algorithm that follows the divide-and-conquer strategy to sort an array. 
It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays based on whether they are less than or greater than the pivot. 
The sub-arrays are then recursively sorted.

Quick Sort has an average time complexity of O(n log n) and is generally faster in practice compared to other sorting algorithms like Merge Sort and Heap Sort. 
However, its worst-case time complexity is O(n^2), which can occur if the pivot selection is consistently unbalanced.

Here's the JavaScript implementation of the Quick Sort algorithm:*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}


/**In this implementation:

quickSort(arr): This function implements the Quick Sort algorithm. 
It takes an array arr as input and recursively divides it into two sub-arrays: 
left (containing elements less than the pivot) and 
right (containing elements greater than the pivot). 
The pivot is chosen as the middle element of the array.

The for loop iterates through the array and categorizes the elements into the left and right sub-arrays based on their relationship with the pivot.

The function returns a new array created by concatenating the sorted left sub-array, the pivot, and the sorted right sub-array.

To use the quickSort function, simply call it with an array of elements:*/

const numbers = [38, 27, 43, 3, 9, 82, 10];
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers); // [3, 9, 10, 27, 38, 43, 82]


/**This will give you the array sortedNumbers, containing the elements sorted in ascending order using Quick Sort. 
Keep in mind that while Quick Sort is generally efficient, it may exhibit performance issues on already sorted or nearly sorted data due to its pivot selection strategy.*/





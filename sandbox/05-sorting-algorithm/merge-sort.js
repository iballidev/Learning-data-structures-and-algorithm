/**Merge Sort is a popular sorting algorithm that uses the divide-and-conquer approach to sort an array. 
It divides the array into smaller sub-arrays, sorts them individually, and then merges them back together to get the sorted result. 
Merge Sort has a time complexity of O(n log n), making it an efficient sorting algorithm for large datasets.

Here's the JavaScript implementation of the Merge Sort algorithm:
*/

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


/**Let's understand the code:

mergeSort(arr): This is the main function that implements the Merge Sort algorithm. 
It takes an array arr as input and recursively divides it into smaller sub-arrays using the merge function. 
Once the sub-arrays are sorted, it calls the merge function to merge them back into a sorted array.

merge(left, right): This function takes two sorted arrays, left and right, and merges them into a single sorted array. 
It uses two pointers (leftIndex and rightIndex) to iterate through the elements of both arrays and compares them. 
The smaller element is added to the result array, and the corresponding pointer is incremented. 
The process continues until all elements from either left or right are processed. Then, any remaining elements from both arrays are appended to the result.

To use the mergeSort function, simply call it with an array of elements:
*/

const numbers = [38, 27, 43, 3, 9, 82, 10];
const sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers); // [3, 9, 10, 27, 38, 43, 82]

/**This will give you the array sortedNumbers, containing the elements sorted in ascending order using Merge Sort.*/

/* testing the division: */ console.log( Math.floor(["a", "b", "5", "e"].length / 2)) // 2
/* testing the division: */ console.log( Math.floor(["a", "b", "5", "e", "6"].length / 2)) // 2 (takes the lowest 'floor')
/* testing the division: */ console.log( Math.floor(["a", "b", "5", "e", "6", "u"].length / 2)) // 3

/* testing slice() on array */ console.log(["a", "b", "5", "e", "6", "u"].slice(0, 2)); // [ 'a', 'b' ] (from 0 index to 2 index but does not include 2)
/* testing slice() on array */ console.log(["a", "b", "5", "e", "6", "u"].slice(2)); // [ '5', 'e', '6', 'u' ] (from 2 index to the end)



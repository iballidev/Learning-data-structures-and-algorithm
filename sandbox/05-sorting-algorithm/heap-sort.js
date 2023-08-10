/**Heap Sort is a comparison-based sorting algorithm that uses the properties of a binary heap data structure to efficiently sort elements. It has an average and worst-case time complexity of O(n log n), making it quite efficient for sorting large datasets.

Here's how Heap Sort works in JavaScript:*/

function heapSort(arr) {
  const n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

/**Here's an explanation of the code:

heapSort(arr): This is the main function for the Heap Sort algorithm. 
It first builds a max heap from the input array by calling the heapify function on appropriate elements. 
Then, it repeatedly extracts the maximum element from the heap and moves it to the end of the array, while maintaining the heap property.

heapify(arr, n, i): This function maintains the max heap property at index i. 
It compares the element at index i with its left and right children, and if needed, 
swaps elements to ensure that the maximum element is at the root of the heap. 
This function is used during both the initial heap construction and the extraction step.

To use the heapSort function, simply call it with an array of elements:*/

const numbers = [38, 27, 43, 3, 9, 82, 10];
const sortedNumbers = heapSort(numbers);
console.log(sortedNumbers); // [3, 9, 10, 27, 38, 43, 82]

/**This will give you the array sortedNumbers, containing the elements sorted in ascending order using Heap Sort. 
Heap Sort is particularly useful when you need to sort a large dataset and want a relatively efficient algorithm 
with a consistent time complexity.*/





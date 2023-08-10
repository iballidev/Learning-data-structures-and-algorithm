/**Binary Search:
This algorithm is applicable only to sorted arrays. It repeatedly divides the search interval in half until the target element is found or the interval becomes empty. */

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    console.log("left: ", left)
    console.log("right: ", right)
  
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return array[mid]; // Found at index mid
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Not found
}

const pupils = ["tosin", "james", "tope", "ibrahim", "dupe"];
const _name = "dupe";
const result = binarySearch(pupils, _name);
console.log("result location: ", result);
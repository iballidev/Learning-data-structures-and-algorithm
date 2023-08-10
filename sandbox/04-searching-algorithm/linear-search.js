/**Linear Search:
This is the simplest searching algorithm. It involves iterating through the array and comparing each element with the target element until a match is found or the end of the array is reached. */

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
    return array[i]; // Found at index i
    }
  }
  return -1; // Not found
}
const pupils = ["tosin", "james", "tope", "ibrahim", "dupe"];
const _name = "tope";
const result = linearSearch(pupils, _name);
console.log("result location: ", result);

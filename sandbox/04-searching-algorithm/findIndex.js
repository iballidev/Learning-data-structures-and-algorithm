/**FindIndex:
Similar to find, the findIndex method returns the index of the first element that satisfies the provided testing function. */

function _findIndex(array, target) {
  const index = array.findIndex((item) => item === target); // Returns index or -1

  return index;
}

const pupils = ["tosin", "james", "tope", "ibrahim", "dupe"];
const _name = "tope";
const result = _findIndex(pupils, _name);
console.log("result location: ", result);

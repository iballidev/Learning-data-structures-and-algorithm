/**JavaScript arrays have a built-in indexOf method that returns the first index at which a given element can be found in the array, or -1 if it's not present. */

function indexOf(array, target) {
    const index = array.indexOf(target); // Returns index or -1
    return index
}


const pupils = ["tosin", "james", "tope", "ibrahim", "dupe"];
const _name = "tope";
const result = indexOf(pupils, _name);
console.log("result location: ", result);
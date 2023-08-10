/**Includes:
The includes method checks if a given element exists in an array. It returns a boolean value indicating whether the element is found. */



function isInclude(array, target) {
    const found = array.includes(target); // Returns true or false
    return found
}


const pupils = ["tosin", "james", "tope", "ibrahim", "dupe"];
const _name = "tope";
const result = isInclude(pupils, _name);
console.log("result location: ", result);
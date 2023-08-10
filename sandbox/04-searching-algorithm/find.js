/**Find:
The find method returns the first element in an array that satisfies a provided testing function. */



function _find(array, target) {
    const element = array.find(item => item === target); // Returns element or undefined
    return element
}


const pupils = ["tosin", "james", "tope", "ibrahim", "dupe"];
const _name = "tope";
const result = _find(pupils, _name);
console.log("result location: ", result);
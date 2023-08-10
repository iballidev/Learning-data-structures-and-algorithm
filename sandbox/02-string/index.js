/**In JavaScript, strings are a fundamental data type used to represent and manipulate textual data. Strings are 
immutable, meaning their values cannot be changed after they are created. Here are some common operations and 
properties related to JavaScript strings: */

/**1. Creating Strings:
You can create strings using single quotes (' '), double quotes (" "), or backticks ( ) for template literals. */
const singleQuotes = "This is a string using single quotes.";
const doubleQuotes = "This is a string using double quotes.";
const templateLiteral = `This is a template literal string.`;

/**2. String Length:
You can find the length of a string using the length property. */
const str = "Hello, world!";
console.log(str.length); // Outputs: 13

/**3. String Concatenation:
You can concatenate strings using the + operator or the concat() method. */
const str1 = "Hello, ";
const str2 = "world!";
const concatenated = str1 + str2; // or str1.concat(str2);
console.log(concatenated); // Outputs: "Hello, world!"

/**4. String Indexing:
You can access individual characters of a string using zero-based indexing. */
const _str = "Hello, world!";
console.log(_str[0]); // Outputs: "H"
console.log(_str.charAt(7)); // Outputs: "w"

/**5. String Methods:
JavaScript provides various methods for manipulating strings, such as toUpperCase(), toLowerCase(), trim(),
substring(), indexOf(), replace(), split(), and more. */
const str_ = "   Hello, world!   ";
console.log(str_.trim()); // Removes leading and trailing whitespace
console.log(str_.substring(7, 12)); // Outputs: "world"
console.log(str_.indexOf("world")); // Outputs: 7
console.log(str_.replace("world", "everyone")); // Outputs: "   Hello, everyone!   "
console.log(str_.split(" ")); // Splits the string into an array: ["", "", "", "Hello,", "world!", "", "", ""]

/**6. String Template Literals:
Template literals allow you to embed expressions inside string literals, making string interpolation easier. */
const _name = "Alice";
const greeting = `Hello, ${_name}!`;
console.log(greeting); // Outputs: "Hello, Alice!"

/**Remember that since strings are immutable, most string methods do not modify the original string but return 
 a new string with the desired changes. */

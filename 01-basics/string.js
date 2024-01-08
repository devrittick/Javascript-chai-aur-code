let name = "Rittick mondal";
let repoCount = 34;

// console.log(name + repoCount + " value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

let str = "Hello";
console.log(str.charAt(1)); // Output: e
// Returns the character at the specified index in a string.

let strOne = "Hello World";
console.log(strOne.indexOf("o")); // Output: 4
// Returns the index of the first occurrence of a specified value in a string, starting the search from the specified index.

console.log(strOne.lastIndexOf("o")); // Output: 7
// Returns the index of the last occurrence of a specified value in a string, searching backward from the specified index.

console.log(strOne.slice(6, 11)); // Output: World
// Extracts a section of a string and returns it as a new string.

console.log(strOne.substring(6, 11)); // Output: World
// Similar to slice, but doesn't support negative indices.

console.log(strOne.substr(6, 5)); // Output: World
// Extracts a specified number of characters from a string, starting at the specified index.

console.log(str.toUpperCase()); // Output: HELLO
// Converts a string to uppercase.

console.log(str.toLowerCase()); // Output: hello
// Converts a string to lowercase.

let strTwo = "  Hello  ";
console.log(strTwo.trim()); // Output: Hello
// Removes whitespace from both ends of a string.

let url = "https://google.com/?how%20get%20a%20job%20in%202024";
console.log(url.replace(/%20/g, "-"));
/*
======================== Importent Note ========================
let str = "Hello";
console.log(str.charAt(1)); // Output: e


*/

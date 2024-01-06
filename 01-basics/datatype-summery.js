// Premitive datatypes example
let name = "Rittick Mondal"; // this is string datatype
let score = 100; // this is number datatype
let scorePerBall = 7.45; // this is number datatype

const isLoggedIn = false; // this is boolean datatype
let outSideTemp = null; // this is null datatype
let userEmail; // this is undefined datatype
let userName = undefined; // this is also undefined datatype  datatype

const id = Symbol("123"); // this is symbol datatype
const anotherId = Symbol("123"); // this is also symbol datatype
// console.log(id === anotherId);

const bigInt = 56325245278346728346782354234632784628735682374583283245872568726438746752n; // this is bigint datatype we have to define it like a normal variable and in the end of the value we have to put n, and it will be consider as bigint
// console.log(bigInt);
// console.log(typeof bigInt);

// Reference // Non primitive datatype example

const heros = ["Shaktiman", "Supperman", "Batman", "Iron man"]; // this is a array

let persion = {
  name: "Rittick Mondal",
  age: 23,
  hobby: "Website development",
  jobTitle: "Wordpress developer",
  goal: "Mern Stack Developer",
  skills: ["html", "css", "bootstrap", "tailwind", "php", "mysql", "wordpress", "wordpress theme development"],
}; // this is a object datatype

let sum = function (num1, num2) {
  console.log("Sum of " + num1 + " and " + num2 + " is ");
  console.log(num1 + num2);
}; // this is a function
sum(4, 9);
console.log(typeof heros);
// console.log(typeof name);
// console.log(typeof score);
// console.log(typeof scorePerBall);
// console.log(typeof isLoggedIn);
// console.log(typeof outSideTemp);
// console.log(typeof userEmail);
// console.log(typeof userName);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof bigInt);
// console.log(typeof heros);
// console.log(typeof persion);
// console.log(typeof sum);

/*
============================Importent Note ======================
there are 2 type of data in javascript

1. Primitive
2. Non Primitive / Reference Type

1. There are 7 Primitive datatype:
a. String
b. Number
c. Boolean
d. Null
e. Undefined
f. Symbol
g. Big int

2. 3 Non Primitive / Reference datatype
a. Array
b. Objects
c. Functions

if we check type of Non Primitive / Reference datatype we get object for array and objects, for function we get function but it mostly called as object function
*/

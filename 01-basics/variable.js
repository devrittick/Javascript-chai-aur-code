"use strict";

const accountId = 12733;
let accountEmail = "devrittick@gmail.com";
var accountPassword = "123456";
accountCity = "jaipur";
let accountState;

accountEmail = "someone@gmail.com";
accountPassword = "098765";

console.log(accountEmail);
console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // to print multiple value in a table format

/*
------------------ Importent NOTE ---------------------
"use strict" --- This directive enables strict mode in JavaScript, which helps catch common coding errors and prevents the use of certain "unsafe" actions.

on line no "6" --- "accountCity = "jaipur";" line will give an error in strict mode because it attempts to assign a value to a variable without declaring it first (missing var, let, or const).

var --- This keyword is the old way of declaring variables in JavaScript. Variables declared with var have a global scope or function scope, but not block scope. This means that they are accessible throughout the entire function or globally, regardless of block boundaries. not recommended in modern JavaScript.


let ---  Use let to declare variables that can be reassigned. Variables declared with let have block scope, meaning they are only accessible within the block or statement where they are defined.


const ---  Use const when you want to create variables that should not be reassigned. Variables declared with const also have block scope. Once a value is assigned to a const variable, it cannot be changed or reassigned.

*/

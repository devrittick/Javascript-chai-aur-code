"use strict";

let name = "Rittick Mondal";
let age = 23;
let isLoggedIn = false;
let address;
let tempharature = null;

console.table([
  name + " -" + typeof name,
  age + " -" + typeof age,
  isLoggedIn + " -" + typeof isLoggedIn,
  address + " -" + typeof address,
  tempharature + " -" + typeof tempharature,
]);
/*
------------------ Importent NOTE ---------------------

"use strict" --- This directive enables strict mode in JavaScript, which helps catch common coding errors and prevents the use of certain "unsafe" actions.

String: any value inside single or double quote 

Number: number without quote

Bigint: big number with quote

Boolean: can be true or false also 1 is true and 0 is false

Null: represent nothing as value and it is object

undefined: a variable is declared but not assigned any value. ex: line no 6 address

symbol: It is used to create unique identifiers
*/

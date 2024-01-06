let name = "Rittick Mondal";
let anotherName = name;
anotherName = "Swarup das";

console.log(name);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "userTwo@facebook.com";
userTwo.upi = "userTwo@paytm";
console.log(userOne);
console.log(userTwo);
/*
============================Importent Note ======================
there are 2 type of memory in js

1. Stack memory (use to store primitev datatypes)
2. Heap memory (use to store non primitev datatypes)

For primitive types (like strings, numbers, booleans, etc), copying creates independent values, each stored in a separate location in the stack memory.

For non-primitive types (like objects), copying creates a new reference to the same object in the heap memory. Both variables point to the same object.


In 1st example [ primitive], both name and anotherName are primitive data types (strings). When you assign the value of name to anotherName, it creates a separate copy in the stack memory for anotherName. So changing the value of anotherName does not affect the value of name.

In 2nd example [non primitive/reference] both userOne and userTwo are reference data types (objects). When you assign userOne to userTwo, they both point to the same object in the heap memory. Therefore, modifying the object through userTwo also affects the object accessed through userOne. Both variables hold a reference to the same object in the heap. 

*/

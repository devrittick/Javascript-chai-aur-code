console.log(2 > 1); // true
console.log(2 >= 1); //true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); //true

// JavaScript performs type coercion in these comparisons, converting the string to a number. So, both are true.

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // null converted to 0 and thet check is 0 getter then 0
console.log(null == 0); // in this case of == null will not try to convert null to a number it will directly compare with 0
console.log(null >= 0); // null will converted to 0 and is equal to 0
console.log(undefined == 0); // generally result in false.
console.log(undefined > 0); // generally result in false.
console.log(undefined < 0); // generally result in false.
console.log(undefined <= 0); // generally result in false.
console.log(undefined >= 0); // generally result in false.

// ===
console.log("Now check strictly");
console.log("2" == 2); // here it not chet strictly [datatype]
console.log("2" === 2); // with === it will check for datatype first then compare

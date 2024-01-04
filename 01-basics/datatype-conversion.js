let score = "fguhfwef";
score = Number(score);
console.log(typeof score);
console.log(score);

let isLoggedIn = undefined;
isLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let string = 0;
string = String(string);
console.log(string);
console.log(typeof string);
/*
------------------ Importent NOTE ---------------------
Number() function help us to convert its paramiters value to a number. some time is can conver sometine it failed to convert in number abd it give us NaN as value

"33" => 33  yes any number writen in single or double quote Number() function can convert it to a number

"33ajgfhuef" => NaN  in this case Numver() function can't convert this string with alfabet in to number. it will give type of number but the value will be Nan

null => null yes null can convert into number with Number() function. the the value will be 0

undefined => NaN  in this case Numver() function can't convert this string with alfabet in to number. it will give type of number but the value will be Nan

true => 1   yes true boolean value can converted into number with Number() function. and the value will be 1
false => 0  yes false boolean value can converted into number with Number() function. and the value will be 0


Convert with Boolean()

"" => false
"jbfh" => true
1 => true
0 => false
null => false
undefined => false


Convert with String()

"" => ""
"jbfh" => "jbfh" 
43 => "43" 
0 => "0"
null => "null" 
undefined => "undefined" 
*/

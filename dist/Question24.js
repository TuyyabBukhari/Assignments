"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.  */
// Tests for equality and inequality with strings
console.log("Equality and Inequality with Strings:");
console.log("Is an orange the same as an apple? I predict False.");
const isOrangeSameAsApple = false;
console.log(isOrangeSameAsApple);
console.log("Is Friday a day of the week? I predict True.");
const isFridayDayOfWeek = true;
console.log(isFridayDayOfWeek);
//Tests using the lower case function
console.log("Tests using the lower case function:");
let name1 = "Tuyyab";
let name2 = "tuyyab";
console.log("lowercase('Tuyyab')=='tuyyab'?I predict true.");
console.log(name1.toLowerCase() == name2);
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is 20==(2*10)?I predict true.");
console.log(20 == (2 * 10)); //true
console.log("Is 20 != (2*10)?I predict false.");
console.log(20 != (2 * 10)); //false
console.log("Is 20 > 10?I predict true.");
console.log(20 > 10); //true
console.log("Is 20 < (2*10)?I predict false.");
console.log(20 < (2 * 10)); //false
console.log("Is 20 >= (2*10)?I predict true.");
console.log(20 >= (2 * 10)); //true
console.log("Is 20 <= 10?I predict false.");
console.log(20 <= 10); //false
//Tests using "and" and "or" operators
let num1 = 10;
let num2 = 5;
let num3 = 15;
console.log("Is num1 > num2 && num2 < num3? I predict True.");
console.log(num1 > num2 && num2 < num3); //true
console.log("Is num1 < num2 || num2 > num3? I predict False.");
console.log(num1 < num2 || num2 > num3); //false
let country = ["US", "Germany", "France"];
//Test whether an item is in a array
console.log("Is 'Germany' in the array?I predict true.");
console.log(country.includes("Germany")); //true
//Test whether an item is not in a array
console.log("Is 'Canada' not in the array?I predict true.");
console.log(!country.includes("Canada")); //true

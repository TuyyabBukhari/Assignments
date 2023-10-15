"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person_age = 19;
// If the person is less than 2 years old, print a message that the person is a baby.
if (person_age < 2) {
    console.log("Person is a baby.");
}
/*If the person is at least 2 years old but less than 4,
print a message that the person is a toddler.*/
else if (person_age >= 2 && person_age < 4) {
    console.log("The person is a toddler.");
}
/*If the person is at least 4 years old but less than 13,
print a message that the person is a kid.*/
else if (person_age >= 4 && person_age < 13) {
    console.log("The person is a kid.");
}
/*If the person is at least 13 years old but less than 20,
print a message that the person is a teenager.*/
else if (person_age >= 13 && person_age < 20) {
    console.log("The person is a teenager.");
}
/*If the person is at least 20 years old but less than 65,
print a message that the person is an adult. */
else if (person_age >= 20 && person_age < 65) {
    console.log("The person is an adult. ");
}
/*If the person is age 65 or older, print a message that the person is an elder. */
else {
    console.log("The person is an elder.");
}

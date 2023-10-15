"use strict";
/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print
a message indicating the number of people you are inviting to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
let dinerGuests = ["Nawal", "Farwa", "Tuyyab", "Meerab"];
for (var i = 0; i < dinerGuests.length; i++) {
    console.log("Dear " + dinerGuests[i] + ", I would like to invite you to dinner.");
}
console.log(dinerGuests.length);

"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner. */
Object.defineProperty(exports, "__esModule", { value: true });
const guestlist = ["Nawal", "Farwa", "Tuyyab"];
const personwhocantmakeit = "Farwa";
console.log(`${personwhocantmakeit}can't make it to the dinner.`);
const newguest = "Meerab";
const index_of_personwhocantmakeit = guestlist.indexOf(personwhocantmakeit);
if (index_of_personwhocantmakeit !== -1) {
    guestlist[index_of_personwhocantmakeit] = newguest;
}
console.log("\nGood news!we've found a bigger dinner table.");
guestlist.unshift("Aiman");
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Zainab");
guestlist.push("Rubab");
guestlist.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are invited to a special dinner hosted by Tuyyab Bukhari. I would be delighted to have you as our guest.\nPlease save the date and join us for a wonderful evening!`);
});

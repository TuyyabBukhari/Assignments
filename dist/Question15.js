"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite. */
Object.defineProperty(exports, "__esModule", { value: true });
const guest_list = ["Nawal", "Farwa", "Tuyyab"];
const whocantmakeit = "Farwa";
console.log(`${whocantmakeit}can't make it to the dinner.`);
const new_guest = "Meerab";
const indexofwhocantmakeit = guest_list.indexOf(whocantmakeit);
if (indexofwhocantmakeit !== -1) {
    guest_list[indexofwhocantmakeit] = new_guest;
}
guest_list.forEach(guest => {
    console.log(`Dear ${guest},\nYou are invited to a special dinner hosted by Tuyyab Bukhari.I would be delighted to have you as our guest.\nPlease save the date and join us for a wonderful evening! `);
});

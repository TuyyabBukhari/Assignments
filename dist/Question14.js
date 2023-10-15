"use strict";
/* Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people
you’d like to invite to dinner. Then use your list to print
a message to each person, inviting them to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Tuyyab", "Farwa", "Nawal"];
function sendInvitation(guestName) {
    console.log(`Dear ${guestName},\nYou are invited to a special dinner hosted by Tuyyab Bukhari.I would be delighted to have you as our guest.\nPlease save the date and join us for a wonderful evening!`);
}
guestList.forEach(guest => {
    sendInvitation(guest);
});

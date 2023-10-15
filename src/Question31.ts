//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

const usernames1 = ["admin", "Tuyyab", "Minahil", "Tuyyab","Zoha"];

for (let i = 0; i < usernames1.length; i++) {
    if (usernames1[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames1[i]}, thank you for logging in again.`);
    }
}

usernames1.length = 0;
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
//Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Checking Usernames
const current_users = ["Tuyyab", "Rubab", "Tuyyab", "Maria", "Zoha"];
const new_users = ["ALia", "Nawal", "Tuyyab", "Maria", "Tuyyab"];

for (let i = 0; i < new_users.length; i++) {
    const new_username = new_users[i].toLowerCase(); 
    
    // Convert to lowercase for case-insensitive comparison

    if (current_users.includes(new_username)) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}

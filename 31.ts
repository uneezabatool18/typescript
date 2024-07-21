// Make a list of current users
const currentUsers  = ['john', 'mary', 'alex', 'sarah', 'emma'];

// Make a list of new users
const newUsers = ['alex', 'emma', 'peter', 'lucy', 'john'];

// Convert currentUsers to lowercase for case-insensitive comparison
const currentUsersLower = currentUsers.map(user => user.toLowerCase());

// Check each new username
for (const newUser of newUsers) {
    // Check if the new username is already taken (case insensitive)
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}

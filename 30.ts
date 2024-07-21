// Exercise 28
const users = [""];  // Empty array of strings

if (users.length > 0) {  // Check if the array of users is not empty
    for (const user of users) {
        console.log(`Hello, ${user}!`);
    }
} else {
    console.log("We need to find some users!");
}

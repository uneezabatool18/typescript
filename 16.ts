let estList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Nikola Tesla", "Galileo Galilei", "Ada Lovelace"];

// Printing invitations to each person on the guest list
for (let i = 0; i < estList.length; i++) {
    console.log("Dear " + estList[i] + ",\nI would like to invite you to dinner. It would be an honor to have you join us.\nSincerely, [Your Name]");
}

console.log("\n"); // Empty line for separation

// Informing people about the limited space
console.log("I'm sorry, but the new dinner table won’t arrive in time for the dinner. I can invite only two people for dinner.");

// Removing guests from the list until only two names remain
while (estList.length > 2) {
    let removedGuest = estList.pop();
    console.log("Sorry, " + removedGuest + ", I can't invite you to dinner.");
}

console.log("\n"); // Empty line for separation

// Printing invitation messages to the two remaining guests
for (let i = 0; i < estList.length; i++) {
    console.log("Dear " + estList[i] + ",\nYou're still invited to dinner. See you soon!\nSincerely, [Your Name]");
}

console.log("\n"); // Empty line for separation

// Removing the last two names from the list
estList.pop();
estList.pop();

// Printing the guest list to verify it's empty
console.log("Guest list:", estList);
